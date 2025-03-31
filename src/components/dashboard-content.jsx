"use client"

import { useState } from "react"
import { ArrowLeftRight, Users, Router, Ship, FileText, ChevronRight, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardContent() {
  const [timeRange, setTimeRange] = useState("Last 30 Days")

  // Mock data for the chart
  const chartData = [
    { date: "05 Mar", value: 800 },
    { date: "06 Mar", value: 900 },
    { date: "07 Mar", value: 1000 },
    { date: "08 Mar", value: 1200 },
    { date: "09 Mar", value: 1100 },
    { date: "10 Mar", value: 1000 },
    { date: "11 Mar", value: 900 },
  ]

  // Mock data for the table
  const tableData = [
    { id: 1, name: "RUDRA", usage: "22.4 GB" },
    { id: 2, name: "Vashi Office", usage: "34.5 GB" },
    { id: 3, name: "Station Satcom", usage: "64.2 GB" },
    { id: 4, name: "Eastaway", usage: "13.2 GB" },
    { id: 5, name: "NPDL", usage: "76.2 GB" },
    { id: 6, name: "MPDL", usage: "36.5 GB" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-[#3a7ab3] border-none text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal flex items-center">
              <ArrowLeftRight className="mr-2 h-4 w-4" />
              TOTAL DATA EXCHANGED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">80.4 TB</div>
          </CardContent>
        </Card>

        <Card className="bg-[#3a7ab3] border-none text-white">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-normal flex items-center">
              <Users className="mr-2 h-4 w-4" />
              HOTSPOT USERS
            </CardTitle>
            <ChevronRight className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">23K/24.2K</div>
          </CardContent>
        </Card>

        <Card className="bg-[#3a7ab3] border-none text-white">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-normal flex items-center">
              <Router className="mr-2 h-4 w-4" />
              ONLINE ROUTERS
            </CardTitle>
            <ChevronRight className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">201/345</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#3a7ab3] border-none text-white">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-normal flex items-center">
              <Ship className="mr-2 h-4 w-4" />
              FLEETS
            </CardTitle>
            <ChevronRight className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45</div>
          </CardContent>
        </Card>

        <Card className="bg-[#3a7ab3] border-none text-white">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-normal flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              TENANTS
            </CardTitle>
            <ChevronRight className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">23</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 bg-[#0f1a2a] rounded-lg p-4">
          <div className="mb-4">
            <h3 className="text-sm text-gray-400">Tenants Data Usage Pattern</h3>
          </div>
          <div className="h-64 relative">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
              <span>1400.00</span>
              <span>1200.00</span>
              <span>1000.00</span>
              <span>800.00</span>
              <span>600.00</span>
            </div>
            <div className="ml-16 h-full flex items-end">
              <svg className="w-full h-full" viewBox="0 0 700 240">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3a7ab3" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3a7ab3" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,240 L0,100 C50,80 100,60 150,70 C200,80 250,120 300,130 C350,140 400,120 450,100 C500,80 550,70 600,90 C650,110 700,150 700,180 L700,240 Z"
                  fill="url(#gradient)"
                />
                <path
                  d="M0,100 C50,80 100,60 150,70 C200,80 250,120 300,130 C350,140 400,120 450,100 C500,80 550,70 600,90 C650,110 700,150 700,180"
                  fill="none"
                  stroke="#3a7ab3"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="ml-16 flex justify-between text-xs text-gray-400 mt-2">
            {chartData.map((item, index) => (
              <span key={index}>{item.date}</span>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-96 bg-[#0f1a2a] rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for Tenant"
                className="pl-8 pr-4 py-1 bg-[#1a2535] border border-[#2a3545] rounded text-sm text-white"
              />
            </div>
            <Select defaultValue={timeRange}>
              <SelectTrigger className="w-[180px] bg-[#1a2535] border-[#2a3545] text-white">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
                <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
                <SelectItem value="Last 24 Hours">Last 24 Hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#1a2535]">
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">No.</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Name</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-400">Data Usage</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="border-b border-[#1a2535]">
                    <td className="px-4 py-2 text-sm text-white">{row.id}</td>
                    <td className="px-4 py-2 text-sm text-white">{row.name}</td>
                    <td className="px-4 py-2 text-sm text-white text-right">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-xs text-gray-400 mt-2 px-4">Top Tenants</div>
          </div>
        </div>
      </div>
    </div>
  )
}

