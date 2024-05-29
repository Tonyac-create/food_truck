import React from 'react'
import Header from '../components/Header'
import Informations from '../components/Informations'
import Menu from '../components/Menu'
import Events from '../components/Events'
import FormContact from '../components/FormContact'
export default function FoodTruck() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <main className='bg-black'>
      <Header />
      <Informations />
      <Menu />
      <Events />
      <FormContact />
      <button
        onClick={scrollToTop}
        className='flex justify-center items-center cursor-pointer rounded-md size-10 bg-gray fixed z-9999 bottom-5 right-6 hover:scale-125'
        >
        <img
        className='size-8'
          src="../arrow-up-solid.svg"
          alt="flèche vers le haut" />
      </button>
    </main>
  )
}
