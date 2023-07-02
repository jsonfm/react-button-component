import { ReactNode } from 'react'
import { SideBar } from './SideBar'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen">
      <SideBar>
        {children}
      </SideBar>
    </main>
  )
}
