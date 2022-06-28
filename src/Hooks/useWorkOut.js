import { useEffect, useState } from "react";

const useWorkOut = () => {
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    fetch("https://calm-dusk-64094.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setWorkout(data));
  }, []);
  return [workout, setWorkout];
};

export default useWorkOut;
