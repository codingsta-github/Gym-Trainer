import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { workoutContext } from "../../../App";
import Pagination from "../../Shared/Pagination/Pagination";
import ShowCase from "../ShowCase/ShowCase";
import "./WorkOut.css";
const WorkOut = () => {
  const workout = useContext(workoutContext);
  const [page, setPage] = useState(1);
  return (
    <div className="WorkOut-container">
      <div className="WorkOut">
        {workout?.slice((page - 1) * 10, page * 10).map((data) => (
          <ShowCase data={data}></ShowCase>
        ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        length={workout.length}
      ></Pagination>
    </div>
  );
};

export default WorkOut;
