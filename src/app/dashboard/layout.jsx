import Sidebar from "@/components/sidebar"
import UserHeader from "@/components/user-header"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0a1120] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <UserHeader />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}

