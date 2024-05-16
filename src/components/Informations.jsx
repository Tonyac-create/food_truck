import React from 'react'

export default function Informations() {
    return (
        <div>
            <p className='text-gray text-center pt-4 mx-14 lg:mx-24'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit corrupti vero ipsum quo.
                Esse, nisi magnam temporibus atque placeat praesentium fugit, ducimus illum repellendus optio quos in modi ut?</p>
            <div className='text-gray mt-3 mx-14 flex flex-col items-center'>
                <p className='text-center'>Venez me retrouver du mardi au samedi de 18h à 22h aux adresses suivantes :</p>
                <ul className='w-1/2 flex flex-col items-center'>
                    <li className='font-bold text-white'>Mardi</li>
                    <p>Lyon 1er</p>
                    <li className='font-bold text-white'>Mercredi</li>
                    <p>Lyon 3ème</p>
                    <li className='font-bold text-white'>Jeudi</li>
                    <p>Lyon 5ème</p>
                    <li className='font-bold text-white'>Vendredi</li>
                    <p>Villeurbanne</p>
                    <li className='font-bold text-white'>Samedi</li>
                    <p>Oullins</p>
                </ul>
            </div>
            <div className="border-2 border-orange opacity-70 w-1/2 mx-auto my-3"></div>
            <p className='text-gray text-center'>Commandez au <span className='text-yellow font-semibold tracking-wide'>01.02.03.04.05</span></p>
            <p className='text-gray text-center mt-4'>Privatisez le food truck pour vos événements</p>
        </div>
    )
}
