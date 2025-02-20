import { redirect } from 'next/navigation'
import { NavHeader } from "@/components/parking-booking/dashboard/nav-header"
import { SidebarNav } from "@/components/parking-booking/dashboard/sidebar-nav"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

// This is a placeholder for actual auth check
async function getUser() {
  return {
    id: '1',
    role: 'operator',
    name: 'John Doe',
    email: 'john@example.com'
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <SidebarNav userRole={user.role as 'driver' | 'operator'} />
        <SidebarInset>
          <NavHeader />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

