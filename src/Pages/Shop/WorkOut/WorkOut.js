import React from 'react';
import useWorkOut from '../../../Hooks/useServices';
import ShowCase from '../ShowCase/ShowCase';
import "./WorkOut.css"
const WorkOut = () => {
    const [workout,setWorkout] = useWorkOut();
    return (
        <div className='WorkOut'>
           {
            workout?.map(data=><ShowCase data={data}></ShowCase>)
           }
        </div>
    );
};

export default WorkOut;