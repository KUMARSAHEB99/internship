"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
export default function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/api/register", { email:email, password:password,name:name });
  
      if (res.status === 201) {
        console.log("register successful", res.data);
        router.push("/dashboard");  
      } else {
        console.log("Unexpected response", res);
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
    }
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
          <label htmlFor="name" className="block text-sm text-gray-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded bg-[#1a2535] text-white border border-[#2a3545]"
            required
          />
        </div>
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
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#1e90ff] hover:bg-[#0078e7] text-white font-medium rounded transition-colors"
        >
          SIGNUP
        </button>
      </form>
    </div>
  )
}

