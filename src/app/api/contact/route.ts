import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Vul alle velden in' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.log(`Contact form: ${name} <${email}>: ${message}`)
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'Clavify Contact <noreply@clavify.io>',
    to: 'support@clavify.io',
    replyTo: email,
    subject: `Nieuw bericht van ${name}`,
    text: `Naam: ${name}\nE-mail: ${email}\n\n${message}`,
  })

  return NextResponse.json({ ok: true })
}
