import { useState } from "react"
import logo from "../assets/new-logo.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
 
 const [isOpen,setIsOpen] = useState(false)
 
 return <>
    <nav className="bg-violet-950 text-white text-xl py-2 px-3 shadow-lg fixed left-0 right-0 z-50 " role="navigation">
<div className="container flex justify-between items-center">

      <a href="#home"><img src={logo} alt="world elevators logo" className="w-28 h-20" loading="lazy"/></a>
        <ul className="hidden md:flex gap-6 *:pb-1 *:font-medium *:hover:text-violet-300 *:transition-colors *:duration-300 *:hover:border-b *:hover:border-white" role="list">
            <li role="listitem"><a href="#home">الرئيسيه</a></li>
            <li role="listitem"><a href="#about">من نحن</a></li>
            <li role="listitem"><a href="#services">خدماتنا</a></li>
            <li role="listitem"><a href="#gallery">أعمالنا</a></li>
            <li role="listitem"><a href="#contact">تواصل معنا</a></li>
        </ul>
        <span className="inline-block md:hidden cursor-pointer" onClick={()=>{setIsOpen(!isOpen)
        }}>
        {   isOpen ?<FontAwesomeIcon icon={faXmark} className="font-medium text-2xl"/>
  : <FontAwesomeIcon icon={faBars} className="font-medium text-2xl"/>
            }
        </span>
</div>
        </nav>
        <aside className={`md:hidden left-menu w-full h-screen bg-violet-950 fixed top-0 bottom-0 z-10 transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="container">
            <ul className="px-4 pt-28 text-white space-y-6 *:font-medium *:hover:text-violet-300 *:transition-colors *:duration-300 *:hover:border-b *:hover:border-white *:hover:w-fit">
            <li onClick={()=>{setIsOpen(false)}} role="listitem"><a href="#home">الرئيسيه</a></li>
            <li onClick={()=>{setIsOpen(false)}} role="listitem"><a href="#about">من نحن</a></li>
            <li onClick={()=>{setIsOpen(false)}} role="listitem"><a href="#services">خدماتنا</a></li>
            <li onClick={()=>{setIsOpen(false)}} role="listitem"><a href="#gallery">أعمالنا</a></li>
            <li onClick={()=>{setIsOpen(false)}} role="listitem"><a href="#contact">تواصل معنا</a></li>
            </ul>
            </div>
        </aside>
    </>
}