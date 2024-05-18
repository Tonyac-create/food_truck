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
      <img onClick={scrollToTop} className='size-8 fixed bottom-5 right-2 animate-pulse' src="../arrow-up-solid.svg" alt="flèche vers le haut" />
      <Informations />
      <Menu />
      <Events />
      <FormContact />
    </main>
  )
}
