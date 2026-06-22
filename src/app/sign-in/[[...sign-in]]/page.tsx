import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: '#0a0a0f' }}>
      <div className="flex flex-col items-center gap-6">
        <div className="text-2xl font-bold">
          Build<span style={{ color: '#a855f7' }}>AI</span>
        </div>
        <SignIn />
      </div>
    </main>
  )
}
