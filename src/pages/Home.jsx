import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate()

    const showingFoodTruckPage = () => {
        navigate("/foodtruck")
    };
    return (
        <main className="homeMain flex flex-col items-center">
            <h1 className="text-yellow font-dancing-script drop-shadow-sm text-5xl pt-10 tracking-wide text-center">
                Mon food truck
            </h1>
            <h2 className="text-yellow text-xl font-roboto tracking-wide mt-5">
                Découvrez notre concept !
            </h2>
            <button
                className="mt-3 hover:scale-150 cursor-pointer"
                onClick={showingFoodTruckPage}
                title="Aller sur le site"
                aria-label='Aller sur le site'
            >
                <img
                    src="./arrow-right-solid.svg"
                    alt="flèche vers la droite"
                    className='size-8'
                />
            </button>
        </main>
    )
}
