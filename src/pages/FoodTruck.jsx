import React from 'react'
import Header from '../components/Header'
import Informations from '../components/Informations'
import Menu from '../components/Menu'
import Events from '../components/Events'
import FormContact from '../components/FormContact'
export default function FoodTruck() {
  
  return (
    <main className='bg-black'>
      <Header />
      <Informations />
      <Menu />
      <Events />
      <FormContact />
    </main>
  )
}
