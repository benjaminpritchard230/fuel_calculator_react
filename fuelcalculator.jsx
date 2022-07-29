import React, { useState } from "react";

const Fuelcalculator = ({
  vehicleMpg,
  setVehicleMpg,
  fuelCost,
  setFuelCost,
  distance,
  setDistance,
}) => {
  console.log(vehicleMpg);
  console.log(fuelCost);
  console.log(distance);

  const fuelDisplay = "Fuel display";
  // convert vehicleMpg to a number
  let journeyCost = (
    ((distance / (vehicleMpg * 0.22)) * fuelCost) /
    100
  ).toFixed(2);

  return (
    <section className="p-5 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="row">
          <div className="col-6 align-items-center justify-content-between">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Vehicle MPG</span>
              <input
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setVehicleMpg(e.target.value)}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Journey distance</span>
              <input
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Fuel price in P</span>
              <input
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setFuelCost(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 align-items-center justify-content-between">
            Hello
          </div>
        </div>
        <h1>The fuel will cost £{journeyCost}</h1>
      </div>
    </section>
  );
};

export default Fuelcalculator;
