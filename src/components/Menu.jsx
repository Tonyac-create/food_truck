import React from 'react'
import { burgers, meals } from '../products'
import CardProduct from './CardProduct'

export default function Menu() {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-yellow font-dancing-script text-center text-5xl tracking-wide'>Notre carte</h2>
      <div className='flex flex-col items-center md:flex md:flex-row md:gap-8'>
        <div className='flex flex-col'>
          <h3 className='text-yellow font-dancing-script text-center text-3xl tracking-wide my-2'>Nos burgers</h3>
          <CardProduct items={burgers} />
        </div>
        <div className='flex flex-col'>
          <h3 className='text-yellow font-dancing-script text-center text-3xl tracking-wide my-2'>Nos plats</h3>
          <CardProduct items={meals} />
        </div>
      </div>
      <div className='rounded-lg bg-gray text-black flex flex-row mt-[50px] p-2'>
        <div className='w-1/2 flex flex-col items-center border-r-2 border-r-orange pr-1'>
          <h3 className='font-bold tracking-wide'>Garnitures</h3>
          <ul className='text-center'>
            <li>Frites maison</li>
            <li>Légumes de saison</li>
            <li>Salade, tomates</li>
          </ul>
        </div>
        <div className='w-1/2 flex flex-col items-center'>
          <h3 className='font-bold tracking-wide'>Sauces maison</h3>
          <ul className='text-center'>
            <li>Echalotes</li>
            <li>Moutarde</li>
            <li>Burger</li>
            <li>Roquefort</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
