import { ReactNode, useState } from "react"
import { SideBarLink } from "../SideBarLink";

interface SideBarProps {
    children: ReactNode
}

export const SideBar = ({ children }: SideBarProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleShowMenu = () => setShowMenu(!showMenu);

    return (
    <div className="h-full w-full flex">
        <div className={`w-full fixed md:relative ${showMenu ? "left-full md:left-0" : "left-0"} flex flex-col items-center gap-2 pt-12 md:items-start md:w-2/5 xl:w-1/5 h-screen bg-neutral md:bg-neutral/20 p-6  md:p-12 duration-200 z-[10000]`}>
            <p className="font-bold">
                <b className="text-warning">Dev</b>challenges.io
            </p>
            <div className="flex flex-col items-center md:items-start gap-8 mt-8 md:mt-12 ">
                <SideBarLink Icon={"Icon"}>Colors</SideBarLink>
                <SideBarLink>Typo</SideBarLink>
                <SideBarLink>Style</SideBarLink>
                <SideBarLink>Sizes</SideBarLink>
                <SideBarLink>Etc</SideBarLink>
                <SideBarLink>Cool</SideBarLink>
            </div>
        </div>
        <div className="h-screen w-full md:p-12">
            <>
                {children}
            </>
            <footer className="px-4 py-8 text-center md:text-start">Created by <b>@jsonfm</b> - devChallenges.io</footer>
        </div>
        <div className="w-8 h-8 absolute bottom-16 right-4 md:hidden z-[10001]" onClick={toggleShowMenu}>X</div>
    </div>
    )
}
