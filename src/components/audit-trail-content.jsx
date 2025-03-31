"use client"

import { useState } from "react"
import { Download, ChevronDown, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AuditTrailContent() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedAction, setSelectedAction] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  // Mock data for the audit trail
  const auditData = [
    {
      time: "11/02/24, 02:33 PM",
      description: (
        <>
          Admin user <span className="font-semibold">Roshann Agarwal</span> with the role{" "}
          <span className="font-semibold">Tenant Admin</span> was created
        </>
      ),
      event: "Create",
      category: "Admin",
      performedBy: "Fletcher Fernandes",
    },
    {
      time: "11/02/24, 01:52 PM",
      description: "A firewall rule allowing traffic from IP addresses to be accepted was created.",
      event: "Create",
      category: "Firewall Rule",
      performedBy: "Sachin Gowda",
    },
    {
      time: "11/02/24, 01:23 PM",
      description: (
        <>
          Certificate downloaded for router <span className="font-semibold">Tranquil Sea</span>
        </>
      ),
      event: "Download",
      category: "Router Certificate",
      performedBy: "Mukesh Sai Kumar",
    },
    {
      time: "11/02/24, 01:11 PM",
      description: (
        <>
          Hotspot user <span className="font-semibold">JohnDoe</span> was deleted from router{" "}
          <span className="font-semibold">Mian3mu</span> (FFQ4QNSNF)
        </>
      ),
      event: "Delete",
      category: "Hotspot User",
      performedBy: "Vishal Dubey",
    },
    {
      time: "11/02/24, 01:01 PM",
      description: (
        <>
          Firewall template <span className="font-semibold">Dualog</span> was deleted
        </>
      ),
      event: "Delete",
      category: "Firewall Template",
      performedBy: "Vishal Dubey",
    },
    {
      time: "11/02/24, 12:58 PM",
      description: (
        <>
          New router <span className="font-semibold">RUDRA23</span> (FFQ4QNSNF) was created
        </>
      ),
      event: "Update",
      category: "Router",
      performedBy: "Karan Sajnani",
    },
    {
      time: "11/02/24, 12:58 PM",
      description: (
        <>
          New router <span className="font-semibold">RUDRA23</span> (FFQ4QNSNF) was created
        </>
      ),
      event: "Create",
      category: "Router",
      performedBy: "Karan Sajnani",
    },
    {
      time: "11/02/24, 12:58 PM",
      description: (
        <>
          New router <span className="font-semibold">RUDRA23</span> (FFQ4QNSNF) was created
        </>
      ),
      event: "Create",
      category: "Router",
      performedBy: "Karan Sajnani",
    },
  ]

  const categories = ["Admin", "Firewall Rule", "Router Certificate", "Hotspot User", "Firewall Template", "Router"]
  const actions = ["Create", "Delete", "Update", "Download"]
  const users = ["Fletcher Fernandes", "Sachin Gowda", "Mukesh Sai Kumar", "Vishal Dubey", "Karan Sajnani"]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Audit Trail</h1>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-transparent border-[#1a2535] text-white hover:bg-[#1a2535]"
        >
          <Download size={16} />
          Download log
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="w-48">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-transparent border-[#1a2535] text-white hover:bg-[#1a2535]"
              >
                <div className="flex items-center gap-2">
                  <span>{selectedCategory || "Category"}</span>
                </div>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-[#1a2535] border-[#2a3545] text-white">
              <DropdownMenuCheckboxItem
                checked={selectedCategory === null}
                onCheckedChange={() => setSelectedCategory(null)}
              >
                Select an option
              </DropdownMenuCheckboxItem>
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={selectedCategory === category}
                  onCheckedChange={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-48">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-transparent border-[#1a2535] text-white hover:bg-[#1a2535]"
              >
                <div className="flex items-center gap-2">
                  <span>Action</span>
                </div>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-[#1a2535] border-[#2a3545] text-white">
              {actions.map((action) => (
                <DropdownMenuCheckboxItem
                  key={action}
                  checked={selectedAction.includes(action)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedAction([...selectedAction, action])
                    } else {
                      setSelectedAction(selectedAction.filter((a) => a !== action))
                    }
                  }}
                >
                  {action}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-48">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-transparent border-[#1a2535] text-white hover:bg-[#1a2535]"
              >
                <div className="flex items-center gap-2">
                  <span>User</span>
                </div>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-[#1a2535] border-[#2a3545] text-white">
              <DropdownMenuCheckboxItem checked={selectedUser === null} onCheckedChange={() => setSelectedUser(null)}>
                Select an option
              </DropdownMenuCheckboxItem>
              {users.map((user) => (
                <DropdownMenuCheckboxItem
                  key={user}
                  checked={selectedUser === user}
                  onCheckedChange={() => setSelectedUser(user)}
                >
                  {user}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-48">
          <Button
            variant="outline"
            className="w-full justify-between bg-transparent border-[#1a2535] text-white hover:bg-[#1a2535]"
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Date</span>
            </div>
            <ChevronDown size={16} />
          </Button>
        </div>
      </div>

      <div className="bg-[#0f1a2a] rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#1a2535] border-b border-[#2a3545]">
              <th className="w-10 px-4 py-3 text-left text-xs font-medium text-gray-400"></th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Time</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Event</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Category</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Performed By</th>
            </tr>
          </thead>
          <tbody>
            {auditData.map((row, index) => (
              <tr key={index} className="border-b border-[#1a2535] hover:bg-[#1a2535]">
                <td className="px-4 py-3">
                  <ChevronDown size={16} className="text-gray-400" />
                </td>
                <td className="px-4 py-3 text-sm text-white">{row.time}</td>
                <td className="px-4 py-3 text-sm text-white">{row.description}</td>
                <td className="px-4 py-3 text-sm text-white">{row.event}</td>
                <td className="px-4 py-3 text-sm text-white">{row.category}</td>
                <td className="px-4 py-3 text-sm text-white">{row.performedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          className="w-8 h-8 p-0 flex items-center justify-center bg-[#1a2535] border-[#2a3545] text-white"
        >
          &lt;
        </Button>
        <Button
          variant="outline"
          className="w-8 h-8 p-0 flex items-center justify-center bg-[#1e90ff] border-[#1e90ff] text-white"
        >
          1
        </Button>
        <Button
          variant="outline"
          className="w-8 h-8 p-0 flex items-center justify-center bg-[#1a2535] border-[#2a3545] text-white"
        >
          2
        </Button>
        <Button
          variant="outline"
          className="w-8 h-8 p-0 flex items-center justify-center bg-[#1a2535] border-[#2a3545] text-white"
        >
          3
        </Button>
        <Button
          variant="outline"
          className="w-8 h-8 p-0 flex items-center justify-center bg-[#1a2535] border-[#2a3545] text-white"
        >
          &gt;
        </Button>
      </div>
    </div>
  )
}

