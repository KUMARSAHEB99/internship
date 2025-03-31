"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Ship,
  Router,
  Shield,
  Wifi,
  ClipboardList,
  CreditCard,
  UserCog,
  Plus,
  User,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
    { name: "Tenants", icon: <Users size={18} />, path: "/dashboard/tenants" },
    { name: "Fleets", icon: <Ship size={18} />, path: "/dashboard/fleets" },
    { name: "Routers", icon: <Router size={18} />, path: "/dashboard/routers" },
    { name: "Firewall Templates", icon: <Shield size={18} />, path: "/dashboard/firewall-templates" },
    { name: "Hotspot Users", icon: <Wifi size={18} />, path: "/dashboard/hotspot-users" },
    { name: "Audit Trail", icon: <ClipboardList size={18} />, path: "/dashboard/audit-trail" },
    { name: "Billing", icon: <CreditCard size={18} />, path: "/dashboard/billing" },
    { name: "Admins", icon: <UserCog size={18} />, path: "/dashboard/admins" },
  ]

  return (
    <div className="w-[190px] bg-[#0f1a2a] flex flex-col h-full">
      <div className="p-4 border-b border-[#1a2535]">
        <Link href="/dashboard" className="text-xl font-bold text-white">
          future<span className="text-[#1e90ff]">konnect</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`flex items-center px-4 py-2 text-sm ${
                  isActive(item.path) ? "bg-[#1e90ff] text-white" : "text-gray-300 hover:bg-[#1a2535]"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center justify-center w-full py-2 px-4 bg-[#1a2535] hover:bg-[#243548] text-white rounded transition-colors">
          <Plus size={16} className="mr-2" />
          Create
        </button>
      </div>
      <div className="border-t border-[#1a2535] p-4 space-y-2">
        <Link
          href="/dashboard/account"
          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#1a2535] rounded"
        >
          <User size={18} className="mr-3" />
          Account
        </Link>
        <Link href="/login" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#1a2535] rounded">
          <LogOut size={18} className="mr-3" />
          Log Out
        </Link>
      </div>
    </div>
  )
}

