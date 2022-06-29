import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { workoutContext } from '../../../App';
import ShowCase from '../ShowCase/ShowCase';
import "./WorkOut.css"
const WorkOut = () => {
    const workout=useContext(workoutContext)
    const [pageCount,setPageCount]=useState()
    const [page,setPage]=useState(1)
    const PresentPage=(num)=>[
        setPage(num)
    ]
    useEffect(()=>{
        setPageCount(Math.ceil(workout.length/10))
    },[pageCount,workout.length])
    return (
        <div className='WorkOut'>
           {
            workout?.slice((page-1)*10,(page*10)).map(data=><ShowCase data={data}></ShowCase>)
           }
           <div className='page-button'>
            {[...Array(pageCount).keys()].map(num=><button className={num+1===page ?`selected`:"pagination"} onClick={()=>PresentPage(num+1)}>{num+1}</button>)}
           </div>
        </div>
    );
};

export default WorkOut;