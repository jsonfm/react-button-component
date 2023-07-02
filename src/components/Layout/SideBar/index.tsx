import { ReactNode, useState } from "react"

interface SideBarProps {
    children: ReactNode
}

export const SideBar = ({ children }: SideBarProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleShowMenu = () => setShowMenu(!showMenu);

    return (
    <div className="h-full flex">
        <div className={`w-full fixed md:relative ${showMenu ? "left-full md:left-0" : "left-0"} flex flex-col items-center gap-2 pt-12 md:items-start md:w-2/5 xl:w-1/5 h-screen bg-neutral md:bg-neutral/20 p-6  md:p-12 duration-200`}>
            <p className="font-bold">
                <b className="text-warning">Dev</b>challenges.io
            </p>
            <div className="flex flex-col gap-8 mt-8 md:mt-12">
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
        <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center fixed bottom-16 right-4 md:hidden z-[1000]" onClick={toggleShowMenu}>x</div>
    </div>
    )
}
