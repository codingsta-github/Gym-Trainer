import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CarUpdate = () => {
  const { _id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/car/${_id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  const delivered = (quantity) => {
    const count = parseInt(quantity) - 1;
    const newQuantity = {count};
    fetch(`http://localhost:5000/car/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1>car{car.name}</h1>
      <h1>quantity : {car.quantity}</h1>
      <button
        onClick={() => {
          delivered(car.quantity);
        }}
      >
        delivered
      </button>
    </div>
  );
};

export default CarUpdate;
