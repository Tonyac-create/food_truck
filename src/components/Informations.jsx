import React from 'react'

export default function Informations() {
    return (
        <section id='informations' className='m-6 pt-24 md:flex md:flex-row'>
            <div className='md:flex: md:flex-col md:p-4 md:w-1/2 lg:p-6 xl:p-8 2xl:p-12'>
                <p className='text-gray mb-5 text-justify'>Venez découvrir une cuisine authentique préparée avec des ingrédients frais: steak charolais 150g,
                    grenouilles fraiches. Pas envie de cuisiner, le food truck est là pour vous régaler.</p>
                <div className='text-gray'>
                    <p>Vous pouvez me retrouver du mardi au samedi de 18h à 22h aux adresses suivantes :</p>
                    <ul className='w-1/2 my-2 text-white flex flex-col mx-auto md:w-full'>
                        <li><span className='font-bold '>Mardi /</span> Lyon 1er</li>
                        <li><span className='font-bold'>Mercredi / </span>Lyon 3ème</li>
                        <li><span className='font-bold'>Jeudi /</span> Lyon 5ème</li>
                        <li><span className='font-bold'>Vendredi /</span> Villeurbanne</li>
                        <li><span className='font-bold'>Samedi /</span> Oullins</li>

                    </ul>
                </div>
            </div>
            <div className="border-2 border-orange opacity-70 w-1/2 mx-auto my-3 md:w-0"></div>
            <div className='md:flex md:flex-col md:w-1/2 md:px-4 lg:p-6'>
                <p className='text-gray text-center'>Commandez au <span className='text-yellow font-semibold tracking-wide'>01.02.03.04.05</span></p>
                <p className='text-gray text-center mt-4'>Privatisez le food truck pour vos événements</p>
                <img className='hidden md:block md:rounded-md md:mt-1' src="../pictures/cuisinier_N&B.jpg" alt="cuisinier" />
            </div>
        </section>
    )
}
