import React from 'react';
import { useContext } from 'react';
import { workoutContext } from '../../../App';
import useWorkOut from '../../../Hooks/useServices';
import ShowCase from '../ShowCase/ShowCase';
import "./WorkOut.css"
const WorkOut = () => {
    const workout=useContext(workoutContext)
    console.log("work",workout)
    return (
        <div className='WorkOut'>
           {
            workout?.map(data=><ShowCase data={data}></ShowCase>)
           }
        </div>
    );
};

export default WorkOut;