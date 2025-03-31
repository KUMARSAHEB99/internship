"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("you@test.dev")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send a password reset email here
    alert("Password reset link sent to your email")
    router.push("/login")
  }

  return (
    <div className="w-full max-w-md p-8 rounded-lg bg-[#0f1a2a]">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          future<span className="text-[#1e90ff]">konnect</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded bg-[#1a2535] text-white border border-[#2a3545]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#1e90ff] hover:bg-[#0078e7] text-white font-medium rounded transition-colors"
        >
          RESET
        </button>
      </form>
    </div>
  )
}

