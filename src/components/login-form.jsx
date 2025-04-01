"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function LoginForm() {
  const [email, setEmail] = useState("you@test.dev")
  const [password, setPassword] = useState("1234567")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("/api/login", { email:email, password:password });
  
      if (res.status === 201) {
        console.log("Login successful", res.data);
        router.push("/dashboard");  
      } else {
        console.log("Unexpected response", res);
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
    }
  };
  

  return (
    <div className="w-full max-w-md p-8 rounded-lg border border-[#1e90ff] bg-[#0f1a2a]">
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
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-[#1a2535] text-white border border-[#2a3545]"
            required
          />
          <div className="text-right">
            <Link href="/reset-password" className="text-xs text-[#1e90ff] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#1e90ff] hover:bg-[#0078e7] text-white font-medium rounded transition-colors"
        >
          LOGIN
        </button>
      </form>
    </div>
  )
}

