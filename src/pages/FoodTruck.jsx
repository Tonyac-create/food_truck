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
      {/* <img onClick={scrollToTop} className='hidden cursor-pointer md:block md:size-8 md:fixed md:z-9999 md:bottom-5 md:right-2 md:animate-pulse' src="../arrow-up-solid.svg" alt="flèche vers le haut" /> */}
      <Informations />
      <Menu />
      <Events />
      <FormContact />
    </main>
  )
}
