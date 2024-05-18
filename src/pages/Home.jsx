import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Home() {
    
    const navigate = useNavigate()

    const showingFoodTruckPage = () => {
        navigate("/foodtruck")
    };
    return (
        <section className="homeMain flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-yellow font-dancing-script text-5xl pt-10 tracking-wide text-center">
                    Mon food truck
                </h1>
                <p className="text-yellow text-2xl font-dancing-script tracking-wide mt-5">
                    Découvrez notre concept !
                </p>
                <img
                    className="size-8 mt-3 animate-pulse cursor-pointer"
                    src="./arrow-right-solid.svg"
                    alt="arrow"
                    onClick={showingFoodTruckPage}
                    title="Aller sur le site"
                />
            </div>
        </section>
    )
}
