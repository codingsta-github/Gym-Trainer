import React from 'react';
import { useContext } from 'react';
import { workoutContext } from '../../../App';
import ShowCase from '../ShowCase/ShowCase';
import "./WorkOut.css"
const WorkOut = () => {
    const workout=useContext(workoutContext)
    // const [workout]=useWorkOut()
    return (
        <div className='WorkOut'>
           {
            workout?.map(data=><ShowCase data={data}></ShowCase>)
           }
        </div>
    );
};

export default WorkOut;