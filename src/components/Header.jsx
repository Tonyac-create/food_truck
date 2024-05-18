import React, { useState } from 'react'
import { Link } from 'react-scroll'
export default function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    const openMenuBurger = () => {
        setIsBurgerMenuOpen(true)
    }

    const closedMenuBurger = () => {
        setIsBurgerMenuOpen(false)
    }

    return (
        <>
            <header className='headerNavBar w-full h-36 flex justify-between items-start md:h-24'>
                <h1 className="text-yellow text-3xl font-dancing-script font-bold pt-2 pl-2 md:text-5xl md:text-center md:w-full md:my-auto tracking-wide">
                    Mon food truck
                </h1>
                {isBurgerMenuOpen ? (
                    <div className='flex flex-row md:hidden'>
                        <nav className='m-2 flex flex-col text-white font-semibold'>
                            <Link onClick={closedMenuBurger} to='informations' smooth={true} duration={500} className='active:text-yellow'>Informations pratiques</Link>
                            <Link onClick={closedMenuBurger} to='menu' smooth={true} duration={500} className=' active:text-yellow'>Notre carte</Link>
                            <Link onClick={closedMenuBurger} to='events' smooth={true} duration={500} className=' active:text-yellow'>Evénements passés</Link>
                            <Link onClick={closedMenuBurger} to='contact' smooth={true} duration={500} className=' active:text-yellow'>Contact</Link>
                        </nav>
                        <div className="size-6 m-2">
                            <img src="../xmark-solid.svg" alt="croix" onClick={closedMenuBurger} />
                        </div>
                    </div>
                ) : (
                    <div className="size-6 m-2 md:hidden" onClick={openMenuBurger}>
                        <img src="../bars-solid.svg" alt="croix" />
                    </div >
                )
                }
            </header >
            <nav className='mr-4 mt-4 font-semibold hidden text-white md:flex md:justify-around'>
                <Link to="informations" smooth={true} duration={500} className=' hover:text-orange cursor-pointer'>Informations pratiques</Link>
                <Link to="menu" smooth={true} duration={500} className=' hover:text-orange cursor-pointer'>Notre carte</Link>
                <Link to="events" smooth={true} duration={500} className=' hover:text-orange cursor-pointer'>Evénements passés</Link>
                <Link to="contact" smooth={true} duration={500} className=' hover:text-orange cursor-pointer'>Contact</Link>
            </nav>
        </>
    )
}
