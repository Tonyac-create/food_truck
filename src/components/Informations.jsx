import React from 'react'

export default function Informations() {
    return (
        <section id='informations' className='my-6 mx-5'>
            <p className='text-gray mb-5 indent-2.5'>Venez découvrir notre cuisine authentique préparée avec des ingrédients frais: steak charolais 150g,
                grenouilles fraiches. Pas envie de cuisiner, notre food truck est là pour vous régaler.</p>
            <div className='text-gray'>
                <p className='indent-2.5'>Venez me retrouver du mardi au samedi de 18h à 22h aux adresses suivantes :</p>
                <ul className='w-1/2 my-2 text-white flex flex-col mx-auto'>
                    <li><span className='font-bold '>Mardi /</span> Lyon 1er</li>
                    <li><span className='font-bold'>Mercredi / </span>Lyon 3ème</li>
                    <li><span className='font-bold'>Jeudi /</span> Lyon 5ème</li>
                    <li><span className='font-bold'>Vendredi /</span> Villeurbanne</li>
                    <li><span className='font-bold'>Samedi /</span> Oullins</li>

                </ul>
            </div>
            <div className="border-2 border-orange opacity-70 w-1/2 mx-auto my-3"></div>
            <p className='text-gray text-center'>Commandez au <span className='text-yellow font-semibold tracking-wide'>01.02.03.04.05</span></p>
            <p className='text-gray text-center mt-4'>Privatisez le food truck pour vos événements</p>
        </section>
    )
}
