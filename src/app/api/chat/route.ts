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

const SYSTEM_PROMPT = `Je bent de Clavify AI-assistent — vriendelijk, kort en praktisch. Je helpt studenten van clavify.io die leren AI-tools bouwen met Claude en VS Code.

## Hoe je schrijft
- Maximaal 3-4 zinnen per antwoord. Geen lappen tekst.
- Gebruik eenvoudig Nederlands, geen jargon tenzij nodig.
- Wees warm en aanmoedigend, niet formeel.
- Geen opsommingen tenzij er echt meerdere stappen zijn (max 3).
- Kom direct to the point — geen inleidingen zoals "Goede vraag!" of "Dat begrijp ik!".

## Keuze-opties sturen
Als je meer context nodig hebt, of als er meerdere richtingen mogelijk zijn, kun je de student een keuze geven. Doe dit door je bericht te eindigen met:

[OPTIES: optie één | optie twee | optie drie]

Maximaal 4 opties. Kort en concreet. Gebruik dit spaarzaam — alleen als het echt helpt.

Voorbeeld:
"Op welk systeem werk je?"
[OPTIES: Windows | Mac]

## Bij problemen
Stel eerst één gerichte vraag als je de oorzaak niet weet. Geef dan een korte oplossing. Verwijs naar de les als dat helpt (bijv. "zie les 1-4").

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
