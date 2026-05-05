// import React, { use } from 'react';

import { useEffect, useState } from "react";
import DetailsFreinds from "./DetailsFreinds";

// const fetchpromise=fetch('/Friends.json').then((res)=>res.json());
const AllFriends = () => {
    // const frineds=use(fetchpromise);
    // console.log(frineds);
    const [friends,setfriends]=useState([]) ;
    const [loading,setloading]=useState(true);

    useEffect(()=>{
    const fethdata=async ()=>{
       const res= await fetch('/Friends.json');
       const datas=await res.json();
       //console.log(datas);

       setfriends(datas)
       setloading(false)
    }
    fethdata()
    },[])
    console.log(loading,friends)
    return (
        <>
    
        <div className='py-5 text-center '>
            <h1 className='font-semibold text-3xl'>My All Dusto Friends Here</h1>
            {/* <p>length of frinds:{frineds.length}</p> */}
        </div>
        { loading ? <h1>data loading mahedi</h1> : (<div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
         {
            friends.map((friend,index)=>{
                return <DetailsFreinds key={index} friend={friend}></DetailsFreinds>
            })
          }
        </div>)}
        </>

    );
};

export default AllFriends;