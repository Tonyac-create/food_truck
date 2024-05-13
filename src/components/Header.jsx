import React from 'react'

export default function Header() {
    return (
        <header>
            <h1 className="text-yellow font-dancing-script text-3xl px-2 tracking-wide">
                Mon food truck
            </h1>
            <div className="size-4 m-2 md:hidden lg:hidden">
                <div className='border-t-2 border-y-yellow pb-1'></div>
                <div className='border-t-2 border-y-yellow pb-1'></div>
                <div className='border-t-2 border-y-yellow'></div>
            </div>
            <nav className='hidden mr-2 text-white md:flex md:gap-3 lg:flex lg:gap-3'>
                <a href="#" className=' hover:text-yellow'>Informations pratiques</a>
                <a href="#" className=' hover:text-yellow'>Notre carte</a>
                <a href="#" className=' hover:text-yellow'>Evénements passés</a>
                <a href="#" className=' hover:text-yellow'>Contact</a>
            </nav>
        </header>
    )
}
