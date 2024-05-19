import React from 'react'

export default function NavBar({ handle, href }) {
    

    return (
        <>
            <a onClick={handle} href="#informations" className='active:text-yellow'>Informations pratiques</a>
            <a onClick={handle} href='#menu' className=' active:text-yellow'>Notre carte</a>
            <a onClick={handle} href={href} className=' active:text-yellow'>Evénements passés</a>
            <a onClick={handle} href='#contact' className=' active:text-yellow'>Contact</a>
        </>
    )
}
