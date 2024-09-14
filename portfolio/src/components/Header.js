import {useState} from 'react'
function Header()
{

   const [menu,setMenu]= useState(false);

    return (
        <header className="flex justify-between bg-purple-600 text-white text-2xl">
            <a className="p-5 text-3xl font-bold text-black" href="#">Nivethaa D</a>
            <nav className="hidden md:block">
                <ul className="flex ">
                    <li className="p-5"><a href="#">Home</a></li>
                    <li className="p-5"><a href="#about">About</a></li>
                    <li className="p-5"><a href="#projects">Projects</a></li>
                    <li className="p-5"><a href="#resume">Resume</a></li>
                    <li className="p-5"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        {menu &&
            <nav className="block md:hidden mobile-nav">
                <ul onClick={()=>setMenu(!menu)} className="flex flex-col">
                    <li className="p-1"><a href="#">Home</a></li>
                    <li className="p-1"><a href="#about">About</a></li>
                    <li className="p-1"><a href="#projects">Projects</a></li>
                    <li className="p-1"><a href="#resume">Resume</a></li>
                    <li className="p-1"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        }
            <button onClick={()=>setMenu(!menu)} className="md:hidden p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            
        </header>
    )
}

export default Header;