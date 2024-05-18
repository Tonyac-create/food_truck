import React from 'react'
import Header from '../components/Header'
import { Element } from 'react-scroll'
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
    <div className='bg-black'>
      <Header />
      <img onClick={scrollToTop} className='size-8 fixed bottom-5 right-2 animate-pulse' src="../arrow-up-solid.svg" alt="flèche vers le haut" />
      <Element name='informations' className='h-full mt-8 font-roboto'>
        <Informations />
      </Element>
      <Element name='menu' className='h-full m-14 font-roboto'>
        <Menu />
      </Element>
      <Element name='events' className='h-full m-12 font-roboto flex flex-col items-center'>
        <Events />
      </Element>
      <Element name='contact' className='h-full m-12 font-roboto flex flex-col items-center'>
        <FormContact />
      </Element>
    </div>
  )
}
