import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useDetails = ({id}) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    const url=`https://calm-dusk-64094.herokuapp.com/details/${id}`
    fetch(url)
    .then((res) =>res.json()
    .then(data=>setDetails(data))
    );
  }, []);
  return [details];
};

export default useDetails;
