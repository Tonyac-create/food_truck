import React, { useState } from 'react'

const burgers = [
  {
    name: "Burger Cheese",
    description: "Pain buns, steak Charolais 150g, tomate, salade, mozzarella, oignons, pesto",
    price: "11",
    imgSrc: "../pictures/burger_cheese.jpg"
  },
  {
    name: "Burger Bacon",
    description: "Pain buns, steak Charolais 150g, tomate, salade, cheddar, bacon, sauce burger maison",
    price: "11",
    imgSrc: "../pictures/burger_frites.jpg"
  },
  {
    name: "Burger Royal",
    description: "Pain buns, steak Charolais 150g, tomate, salade, cheddar, oignons frits, sauce moutarde maison",
    price: "11",
    imgSrc: "../pictures/burger_cheese.jpg"
  },
  {
    name: "Burger junior",
    description: "Pain buns, steak Charolais 100g, tomate, salade, cheddar, ketchup",
    price: "11",
    imgSrc: "../pictures/burger_frites.jpg"
  },
  {
    name: "Burger Veggi",
    description: "Pain buns, croquette de pomme de terre, tomate, salade, mayonnaise, oignons",
    price: "10",
    imgSrc: "../pictures/burger_cheese.jpg"
  },
]

export default function CardProduct() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? burgers.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === burgers.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative bg-gray rounded-lg'>
      <div>
        <img className='absolute top-[50%] left-5 size-5' onClick={prevSlide} src="../arrow-left-solid.svg" alt="flèche gauche" />
      </div>
      <div>
        <img className='absolute top-[50%] right-5 size-5' onClick={nextSlide} src="../arrow-right-solid-black.svg" alt="flèche gauche" />
      </div>
      {
        burgers.map((burger, index) => (
          <div key={index} className={`rounded-lg bg-gray-200 flex flex-col items-center p-4 font-roboto transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${index === currentIndex ? 'block' : 'hidden'}`}>
            <img className='w-4/5 rounded-lg' src={burger.imgSrc} alt={burger.name} />
            <p className='font-bold tracking-wide text-lg mt-2'>{burger.name}</p>
            <p className='text-center mt-1'>{burger.description}</p>
            <span className='border-2 border-orange rounded-md bg-orange text-white font-semibold tracking-wide mt-2 py-1 px-2'>{burger.price} € avec garnitures</span>
          </div>

        ))
      }
    </div>
  )
}
