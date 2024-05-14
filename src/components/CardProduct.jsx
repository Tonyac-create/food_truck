import React, { useState } from 'react'
export default function CardProduct({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleBurger = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='relative'>
      <div>
        <img className='absolute top-[20%] left-5 size-5 hover:scale-125' onClick={prevSlide} src="../arrow-left-solid.svg" alt="flèche gauche" />
      </div>
      <div className='bg-gray rounded-lg shadow-around my-10'>
        {
          items.map((item, index) => (
            <div key={index} className={`rounded-lg bg-gray-200 flex flex-col items-center p-4 font-roboto transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${index === currentIndex ? 'block' : 'hidden'}`}>
              <img className='w-4/5 rounded-lg' src={item.imgSrc} alt={item.name} />
              <p className='font-bold tracking-wide text-lg mt-2'>{item.name}</p>
              <p className='text-center mt-1'>{item.description}</p>
              <span className='border-2 border-orange rounded-md bg-orange text-white font-semibold tracking-wide mt-2 py-1 px-2'>{item.price} € avec garnitures</span>
              <div className='flex gap-2 mt-3'>
                {items.map((_, subIndex) => {
                  return <i key={subIndex} onClick={() => handleBurger(subIndex)} class={`fa-solid fa-circle ${subIndex === currentIndex ? "circleOrange" : ""}`}></i>
                })}
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <img className='absolute top-[20%] right-5 size-5 hover:scale-125' onClick={nextSlide} src="../arrow-right-solid-black.svg" alt="flèche droite" />
      </div>
    </div>
  )
}
