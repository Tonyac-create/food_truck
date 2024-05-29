import React from 'react'
import { burgers, meals } from '../products'
import CardProduct from './CardProduct'

export default function Menu() {
  return (
    <section id='menu' className='flex flex-col items-center m-6'>
      <header>
        <h2 className='text-yellow font-dancing-script text-center text-5xl tracking-wide'>Notre carte</h2>
      </header>
      <div className='xl:flex xl:flex-row'>
        <section className='flex flex-col items-center md:flex md:flex-row md:gap-8 lg:gap-20'>
          <article className='flex flex-col'>
            <header>
              <h3 className='text-yellow font-roboto text-center text-2xl tracking-wide my-4'>Nos burgers</h3>
            </header>
            <CardProduct items={burgers} />
          </article>
          <article className='flex flex-col'>
            <header>
              <h3 className='text-yellow font-roboto text-center text-2xl tracking-wide my-4'>Nos plats</h3>
            </header>
            <CardProduct items={meals} />
          </article>
        </section>
        <section className='rounded-lg bg-gray text-black flex flex-row mt-[50px] p-2 xl:ml-8 xl:h-1/2 xl:my-auto'>
          <div className='w-1/2 flex flex-col items-center border-r-2 border-r-orange pr-1'>
            <header>
              <h3 className='font-bold tracking-wide'>Garnitures</h3>
            </header>
            <ul className='text-center'>
              <li>Frites maison</li>
              <li>Légumes de saison</li>
              <li>Salade, tomates</li>
            </ul>
          </div>
          <div className='w-1/2 flex flex-col items-center'>
            <header>
              <h3 className='font-bold tracking-wide'>Sauces maison</h3>
            </header>
            <ul className='text-center'>
              <li>Echalotes</li>
              <li>Moutarde</li>
              <li>Burger</li>
              <li>Roquefort</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}
