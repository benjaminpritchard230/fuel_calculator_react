import { React, useState } from "react";
import Homepage from "./components/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fuelcalculator from "./components/fuelcalculator";
import Navbar from "./components/navbar";

function App() {
  const [vehicleMpg, setVehicleMpg] = useState(0);
  const [fuelCost, setFuelCost] = useState(0);
  const [distance, setDistance] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/fuel"
          element={
            <Fuelcalculator
              vehicleMpg={parseFloat(vehicleMpg)}
              setVehicleMpg={setVehicleMpg}
              fuelCost={parseFloat(fuelCost)}
              setFuelCost={setFuelCost}
              distance={parseFloat(distance)}
              setDistance={setDistance}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
