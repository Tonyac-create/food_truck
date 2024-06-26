import React, { useState } from 'react'
export default function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    const openMenuBurger = () => {
        setIsBurgerMenuOpen(true)
    }

    const closedMenuBurger = () => {
        setIsBurgerMenuOpen(false)
    }

    const handleLog = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCloseAndLog = (e) => {
        closedMenuBurger()
        handleLog(e)
    }

    return (
        <>
            <header className='w-full bg-lightBlack py-2 flex justify-between items-center fixed top-0 z-9999 md:h-16 md:flex-row'>
                <h1 className="text-yellow text-3xl font-dancing-script font-bold pl-2 mb-auto md:text-5xl md:text-center md:w-full md:my-auto tracking-wide">
                    Mon food truck
                </h1>
                {isBurgerMenuOpen ? (
                    <div className='flex flex-col md:hidden'>
                        <div className="size-6 m-2 flex justify-end ml-auto">
                            <img src="../xmark-solid.svg" alt="croix" onClick={closedMenuBurger} />
                        </div>
                        <nav className='m-2 flex flex-col text-white font-semibold'>
                            <a onClick={handleCloseAndLog} href="#informations" className='hover:text-yellow'>Informations pratiques</a>
                            <a onClick={handleCloseAndLog} href='#menu' className=' hover:text-yellow'>Notre carte</a>
                            <a onClick={handleCloseAndLog} href='#events' className=' hover:text-yellow'>Evénements passés</a>
                            <a onClick={handleCloseAndLog} href='#contact' className=' hover:text-yellow'>Contact</a>
                        </nav>
                    </div>
                ) : (
                    <div className="size-6 m-2 md:hidden" onClick={openMenuBurger}>
                        <img src="../bars-solid.svg" alt="croix" />
                    </div >
                )
                }
                <nav className='w-full bg-lightBlack font-semibold hidden text-white md:flex md:flex-row md:justify-around md:py-3'>
                    <a href='#informations' onClick={handleLog} className=' hover:text-orange focus:text-yellow cursor-pointer'>Informations pratiques</a>
                    <a href='#menu' onClick={handleLog} className=' hover:text-orange focus:text-yellow cursor-pointer'>Notre carte</a>
                    <a href='"events' onClick={handleLog} className=' hover:text-orange focus:text-yellow cursor-pointer'>Evénements passés</a>
                    <a href='#contact' onClick={handleLog} className=' hover:text-orange focus:text-yellow  cursor-pointer'>Contact</a>
                </nav>
            </header >
        </>
    )
}
