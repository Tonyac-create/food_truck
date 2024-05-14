import React from 'react'
import Header from './components/Header'
import { Element } from 'react-scroll'
import CardProduct from './components/CardProduct'
import { burgers, meals } from './products'
export default function FoodTruck() {
  return (
    <div>
      <Header />
      <Element name='informations' className='h-full mt-8 font-roboto'>
        <p className='text-gray text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit corrupti vero ipsum quo.
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
      </Element>
      <Element name='menu' className='h-full m-14 font-roboto'>
        <h2 className='text-yellow font-dancing-script text-center text-5xl tracking-wide'>Notre carte</h2>
        <h3 className='text-yellow font-dancing-script text-center text-3xl tracking-wide my-2'>Nos burgers</h3>
        <CardProduct items={burgers}/>
        <h3 className='text-yellow font-dancing-script text-center text-3xl tracking-wide my-2'>Nos plats</h3>
        <CardProduct items={meals}/>
        <div className='rounded-lg bg-gray text-black flex flex-row p-2'>
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
      </Element>
      <Element name='events' className='h-full m-12 font-roboto flex flex-col items-center'>
        <h2 className='text-yellow font-dancing-script text-center text-5xl tracking-wide'>Evénement passés</h2>
        <img className='w-3/4 rounded-xl mt-4' src="../pictures/food_truck.jpg" alt="Food truck" />
        <ul className='text-gray mt-2'>
          <li><span className='font-medium text-yellow'>Festival Musique</span> / 20 Février 2024</li>
          <li><span className='font-medium text-yellow'>Anniversaire Milou</span> / 11 et 12 Mai 2024</li>
        </ul>
      </Element>
    </div>
  )
}
