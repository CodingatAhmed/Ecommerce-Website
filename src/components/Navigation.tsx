import { useState } from "react";
import { Sidebar } from "./mySidebar";
import Image from "next/image";

export const Navigation = () => {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    }

    return (
        <div className='flex items-center gap-5 md:gap-0'>
            {/* Hamburger Menu */}
            <button onClick={ toggleSideBarOpen }>
            </button>
                <Image height={200} width={200} className="pt-1 md:hidden" src="https://www.hangoverhops.com/frontEnd/assets/images/about-six.png" alt=""/>
            {
                sideBarOpen && (
                    <Sidebar toggleSideBarOpen={toggleSideBarOpen}/>
                )
            }
            {/* Logo */}
            <Image width={200} height={200} src="https://www.hangoverhops.com/frontEnd/assets/images/about-six.png" alt=""/>
            {/* Sections */}
            <div id="sections" className='hidden md:flex items-center pt-1 gap-6 text-dark-grayish-blue'>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}
