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
            <header className='w-full h-36 flex justify-between items-start md:h-24'>
                <h1 className="text-yellow text-3xl font-dancing-script font-bold pt-2 pl-2 md:text-5xl md:text-center md:w-full md:my-auto tracking-wide">
                    Mon food truck
                </h1>
                {isBurgerMenuOpen ? (
                    <div className='flex flex-row md:hidden'>
                        <nav className='m-2 flex flex-col text-white font-semibold'>
                            <Link to='informations' smooth={true} duration={500} className='hover:text-orange'>Informations pratiques</Link>
                            <Link  to='menu' smooth={true} duration={500} className=' hover:text-orange'>Notre carte</Link>
                            <Link  to='informations' smooth={true} duration={500} className=' hover:text-orange'>Evénements passés</Link>
                            <Link  to='informations' smooth={true} duration={500} className=' hover:text-orange'>Contact</Link>
                        </nav>
                        <div className="size-4 m-2">
                            <img src="../xmark-solid.svg" alt="croix" onClick={closedMenuBurger} />
                        </div>
                    </div>
                ) : (
                    <div className="size-4 m-2 md:hidden" onClick={openMenuBurger}>
                        <img src="../bars-solid.svg" alt="croix" />
                    </div >
                )
                }
            </header >
            <nav className='mr-4 mt-4 font-semibold hidden text-white md:flex md:justify-around'>
                <a href="#" className=' hover:text-orange'>Informations pratiques</a>
                <a href="#" className=' hover:text-orange'>Notre carte</a>
                <a href="#" className=' hover:text-orange'>Evénements passés</a>
                <a href="#" className=' hover:text-orange'>Contact</a>
            </nav>
        </>
    )
}
