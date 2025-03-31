import { Bell } from "lucide-react"

export default function UserHeader() {
  return (
    <header className="h-16 border-b border-[#1a2535] flex items-center justify-end px-6">
      <div className="flex items-center space-x-4">
        <span className="text-gray-300">John doe</span>
        <div className="relative">
          <Bell size={20} className="text-gray-300" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
      </div>
    </header>
  )
}

