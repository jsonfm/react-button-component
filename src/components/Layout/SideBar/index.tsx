import { ReactNode } from "react"

interface SideBarProps {
    children: ReactNode
}

export const SideBar = ({ children }: SideBarProps) => {
  return (
    <div className="h-full flex">
        <div className="md:w-1/5 h-screen bg-neutral/20  md:p-12">
            <p className="font-bold">
                <b className="text-warning">Dev</b>challenges.io
            </p>
            <div className="flex flex-col gap-8 md:mt-12">
                <p>Colors</p>
                <p>Typography</p>
                <p>Spaces</p>
                <p>Buttons</p>
                <p>Inputs</p>
                <p>Grid</p>
            </div>
        </div>
        <div className="h-screen md:p-12">
            <>
                {children}
            </>
            <footer>Created by <b>@jsonfm</b> - devChallenges.io</footer>
        </div>
    </div>
  )
}
