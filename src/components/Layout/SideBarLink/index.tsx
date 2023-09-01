import React from 'react'

interface SideBarProps {
    href?: string;
    children: React.ReactNode;
    Icon?: any;
}

export const SideBarLink = ({ href, children, Icon }: SideBarProps) => {
  const isActive = true;
  const activeClassName = "text-warning";
  const className = `flex items-center gap-2 hover:scale-105 transition-[200ms] cursor-pointer ${activeClassName}`
  return (
    <div className={className}>
       {Icon && <div>{Icon}</div>}  {children}
    </div>
  )
}
