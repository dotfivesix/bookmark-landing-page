import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Header()
{
    const [isNavVisible, setIsNavVisible] = useState(false);

    const navItems = ["features", "pricing", "contact"];
    
    const DesktopNavItem = ({item}) => (
        <li className="flex items-center"><a href={`#${item}`} className="hover:text-soft-red capitalize">{item}</a></li>
    );

    const MobileNavItem = ({item}) => (
        <li className="border-b-[1px] border-grayish-blue pb-2"><a href={`#${item}`} className="hover:text-grayish-blue" onClick={() => setIsNavVisible(!isNavVisible)}>{item}</a></li>
    );

    return (
        <header className="flex justify-center px-6 h-20 md:px-10 lg:h-24">
            <nav className="max-w-7xl flex w-full justify-between items-center relative">
                
                <picture>
                    <img src="/images/logo-bookmark.svg" alt="bookmark logo" className="lg:w-48 cursor-pointer" />
                </picture>

                <ul className="hidden md:flex gap-12 uppercase font-medium text-very-dark-blue lg:text-lg">
                    {navItems.map(navItem => <DesktopNavItem item={navItem} />)}
                    <li className="flex items-center"><button href="#" className="uppercase px-8 py-2 bg-soft-red rounded-md text-white hover:shadow-md hover:text-soft-red border-2 border-soft-red hover:bg-transparent">Login</button></li>
                </ul>

                <ul className={isNavVisible ? "absolute top-24 right-0 bg-very-dark-blue flex gap-4 flex-col p-6 w-48 uppercase text-white text-center text-lg md:hidden" : "hidden"}>
                    {navItems.map(navItem => <MobileNavItem item={navItem} />)}
                    <li><button href="#" className="uppercase w-full border-[1px] border-white py-1 hover:bg-white hover:text-very-dark-blue" onClick={() => setIsNavVisible(!isNavVisible)}>Login</button></li>
                </ul>

                <button onClick={() => setIsNavVisible(!isNavVisible)} className="md:hidden">
                    {isNavVisible ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </button>

            </nav>
        </header>
    )
}