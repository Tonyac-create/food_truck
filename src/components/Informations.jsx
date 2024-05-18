import React from 'react'

export default function Informations() {
    return (
        <div className=' flex flex-col items-center mx-14 lg:mx-24'>
            <p className='text-gray text-balance pt-4 mx-14 lg:mx-24'>Venez découvrir notre cuisine authentique préparée avec des ingrédients frais: steak charolais 150g,
             grenouilles fraiches. Pas envie de cuisiner, notre food truck est là pour vous régaler.</p>
            <div className='text-gray mt-3 mx-14'>
                <p className='text-balance'>Venez me retrouver du mardi au samedi de 18h à 22h aux adresses suivantes :</p>
                <ul className='w-1/2'>
                    <li className='text-white'><span className='font-bold'>Mardi /</span> Lyon 1er</li>

                    <li className='text-white'><span className='font-bold'>Mercredi / </span>Lyon 3ème</li>

                    <li className='text-white'><span className='font-bold'>Jeudi /</span> Lyon 5ème</li>

                    <li className='text-white'><span className='font-bold'>Vendredi /</span> Villeurbanne</li>

                    <li className='text-white'><span className='font-bold'>Samedi /</span> Oullins</li>

                </ul>
            </div>
            <div className="border-2 border-orange opacity-70 w-1/2 mx-auto my-3"></div>
            <p className='text-gray text-center'>Commandez au <span className='text-yellow font-semibold tracking-wide'>01.02.03.04.05</span></p>
            <p className='text-gray text-center mt-4'>Privatisez le food truck pour vos événements</p>
        </div>
    )
}
