import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'
import { auth } from '@clerk/nextjs/server'
import { lessonContent } from '@/lib/lessonContent'
import { modules } from '@/lib/modules'

function buildLessonDump(): string {
  const lines: string[] = []
  for (const mod of modules) {
    lines.push(`\n## Module ${mod.id}: ${mod.title}`)
    lines.push(mod.description)
    for (const lesson of mod.lessons) {
      const content = lessonContent[lesson.id as keyof typeof lessonContent]
      lines.push(`\n### Les ${lesson.id}: ${lesson.title}`)
      if (!content) continue
      if (content.intro) lines.push(content.intro)
      for (const section of content.sections ?? []) {
        lines.push(`\n#### ${section.title}`)
        if (section.body) lines.push(section.body)
        if (section.code) lines.push(`\`\`\`\n${section.code}\n\`\`\``)
      }
      if (content.checklist?.length) {
        lines.push('\nChecklist:')
        for (const item of content.checklist) lines.push(`- ${item}`)
      }
    }
  }
  return lines.join('\n')
}

const LESSON_DUMP = buildLessonDump()

const SYSTEM_PROMPT = `Je bent de Clavify AI-assistent — een slimme, directe helper voor studenten van het Clavify cursusplatform (clavify.io).

Studenten leren hier om AI-tools te bouwen met Claude en VS Code. Ze zijn vaak beginners en lopen vast op praktische dingen: installaties, foutmeldingen, stappen die ze niet begrijpen, code die niet werkt.

## Hoe je denkt bij een probleem
Wanneer een student een probleem beschrijft, denk je stap voor stap na:
1. Wat probeert de student te doen en in welke les zit hij/zij waarschijnlijk?
2. Wat zijn de meest voorkomende oorzaken van dit probleem?
3. Wat is de meest waarschijnlijke oorzaak gezien de context?
4. Wat is de eenvoudigste oplossing die je kunt geven?

Geef altijd eerst je diagnose ("Dit klinkt als..."), dan de oplossing. Als je meerdere mogelijke oorzaken ziet, noem ze in volgorde van waarschijnlijkheid.

## Gedragsregels
- Gebruik eenvoudig Nederlands
- Geen lange inleidingen — kom direct to the point
- Als iets technisch is, leg het stap voor stap uit
- Als de student een foutmelding geeft, analyseer hem letterlijk
- Als je het echt niet weet, zeg dat eerlijk
- Verwijs naar de specifieke les als dat helpt (bijv. "dat staat uitgelegd in les 3-2")

## Volledige lesinhoud

${LESSON_DUMP}`

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) return new Response('Unauthorized', { status: 401 })

  const { messages, context } = await req.json()

  const result = streamText({
    model: anthropic('claude-haiku-4-5-20251001'),
    system: SYSTEM_PROMPT + (context ?? ''),
    messages,
    maxOutputTokens: 1024,
  })

  return result.toTextStreamResponse()
}
