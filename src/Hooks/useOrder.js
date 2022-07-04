import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useOrder = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  console.log(user.email);
  useEffect(() => {
    fetch(`https://calm-dusk-64094.herokuapp.com/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user.email]);
  return [order];
};

export default useOrder;
