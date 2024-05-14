import { useState } from "react";
import FoodTruck from "./FoodTruck";

function App() {
  const [isClickArrow, setIsClickArrow] = useState(false);

  const handleHomePage = () => {
    setIsClickArrow(true);
  };

  return (
    <main className={isClickArrow ? "bg-black" : "homeMain"}>
      {isClickArrow ? (
        <FoodTruck />
      ) : (
        <section className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-yellow font-dancing-script text-5xl pt-10 tracking-wide text-center">
              Mon food truck
            </h1>
            <p className="text-yellow text-2xl font-dancing-script tracking-wide mt-5">
              Découvrez notre concept !
            </p>
            <img
              className="size-8 mt-3 animate-pulse"
              src="./arrow-right-solid.svg"
              alt="arrow"
              onClick={handleHomePage}
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
