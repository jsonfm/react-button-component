import { ReactNode } from 'react'
import { SideBar } from './SideBar'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SideBar>
        {children}
      </SideBar>
    </main>
  )
}
