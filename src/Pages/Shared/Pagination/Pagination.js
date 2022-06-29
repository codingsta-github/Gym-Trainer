import React, { useEffect, useState } from 'react';
import "./Pagination.css"
const Pagination = ({page,setPage,length}) => {
    const [pageCount,setPageCount]=useState()
   
    const PresentPage=(num)=>[
        setPage(num)
    ]
    useEffect(()=>{
        setPageCount(Math.ceil(length/10))
    },[pageCount,length])
    return (
        <div className='pagination-button'>
            {[...Array(pageCount).keys()].map(num=><button className={num+1===page ?`selected`:"pagination"} onClick={()=>PresentPage(num+1)}>{num+1}</button>)}
           </div>
    );
};

export default Pagination;