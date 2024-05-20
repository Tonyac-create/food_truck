import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable';
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

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className='relative w-[330px] h-[360px] bg-gray rounded-lg shadow-around' {...handlers}>
      <div className='hidden md:block'>
        <img className='absolute top-[50%] size-5 hover:scale-125' onClick={prevSlide} src="../arrow-left-solid.svg" alt="flèche gauche" />
      </div>
        {
          items.map((item, index) => (
            <div key={index} className={`rounded-lg bg-gray-200 flex flex-col items-center tracking-wide px-4 py-2 font-roboto transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${index === currentIndex ? 'block' : 'hidden'}`}>
              <img className='w-52 h-36 rounded-lg' src={item.imgSrc} alt={item.name} />
              <p className='font-bold text-lg mt-2'>{item.name}</p>
              <p className='text-start mt-2 h-14'>{item.description}</p>
              <span className='border-2 border-orange rounded-md bg-orange text-black font-semibold tracking-wide mt-8 py-1 px-2'>{item.price} € avec garnitures</span>
              <div className='flex gap-2 mt-3'>
                {items.map((_, subIndex) => {
                  return <i key={subIndex} onClick={() => handleBurger(subIndex)} className={`fa-solid fa-circle ${subIndex === currentIndex ? "circleOrange" : ""}`}></i>
                })}
              </div>
            </div>
          ))
        }
      <div className='hidden md:block'>
        <img className='absolute top-[50%] right-0 size-5 hover:scale-125' onClick={nextSlide} src="../arrow-right-solid.svg" alt="flèche droite" />
      </div>
    </div>
  )
}
