"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, MapPin, Clock, CreditCard, Settings, Truck, Building2, BarChart } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const driverNavItems = [
  {
    title: "Dashboard",
    href: "/parking-booking/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Find Parking",
    href: "/parking-booking/dashboard/find-parking",
    icon: MapPin,
  },
  {
    title: "My Bookings",
    href: "/parking-booking/dashboard/bookings",
    icon: Clock,
  },
  {
    title: "Payments",
    href: "/parking-booking/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/parking-booking/dashboard/settings",
    icon: Settings,
  },
]

const operatorNavItems = [
  {
    title: "Dashboard",
    href: "/parking-booking/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Parking Lots",
    href: "/parking-booking/dashboard/parking-lots",
    icon: Building2,
  },
  {
    title: "Bookings",
    href: "/parking-booking/dashboard/bookings",
    icon: Truck,
  },
  {
    title: "Payments",
    href: "/parking-booking/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/parking-booking/dashboard/analytics",
    icon: BarChart,
  },
  {
    title: "Settings",
    href: "/parking-booking/dashboard/settings",
    icon: Settings,
  },
]

interface SidebarNavProps {
  userRole?: "driver" | "operator"
}

export function SidebarNav({ userRole = "driver" }: SidebarNavProps) {
  const pathname = usePathname()
  const navItems = userRole === "driver" ? driverNavItems : operatorNavItems

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">{userRole === "driver" ? "Driver Portal" : "Operator Portal"}</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

