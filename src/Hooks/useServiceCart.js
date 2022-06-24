import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useServiceCart = ({id}) => {
  const [ServiceCart, setServiceCart] = useState({});
  useEffect(() => {
    const url=`http://localhost:5000/ServiceCart/${id}`
    fetch(url)
    .then((res) =>res.json()
    .then(data=>setServiceCart(data))
    );
  }, []);
  return [ServiceCart];
};

export default useServiceCart;
