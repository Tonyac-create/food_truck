import { Route, Routes } from 'react-router-dom'
import FoodTruck from "./pages/FoodTruck";
import Home from "./pages/Home";
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/foodtruck" element={<FoodTruck />}/>
      </Routes>
    </>
  );
}

export default App;