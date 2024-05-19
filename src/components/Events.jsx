import React from 'react'

export default function Events() {
    return (
        <section id='events' className='flex flex-col items-center my-6'>
            <h2 className='text-yellow font-dancing-script text-center text-5xl tracking-wide mb-4'>Evénements passés</h2>
            <img className='w-3/4 rounded-xl my-4' src="../pictures/food_truck.jpg" alt="Food truck" />
            <ul className='text-gray mt-2'>
                <li><span className='font-medium text-yellow'>Festival Musique</span> / 20 Février 2024</li>
                <li><span className='font-medium text-yellow'>Anniversaire Milou</span> / 11 et 12 Mai 2024</li>
            </ul>
        </section>
    )
}
