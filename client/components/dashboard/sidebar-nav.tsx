"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, MapPin, Clock, CreditCard, Settings, Truck, Building2 } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const driverNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Find Parking",
    href: "/dashboard/find-parking",
    icon: MapPin,
  },
  {
    title: "My Bookings",
    href: "/dashboard/bookings",
    icon: Clock,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

const operatorNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Parking Lots",
    href: "/dashboard/parking-lots",
    icon: Building2,
  },
  {
    title: "Bookings",
    href: "/dashboard/bookings",
    icon: Truck,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

interface SidebarNavProps {
  userRole?: 'driver' | 'operator'
}

export function SidebarNav({ userRole = 'driver' }: SidebarNavProps) {
  const pathname = usePathname()
  const navItems = userRole === 'driver' ? driverNavItems : operatorNavItems

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">{userRole === 'driver' ? 'Driver Portal' : 'Operator Portal'}</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                  >
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

