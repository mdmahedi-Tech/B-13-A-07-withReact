// import React, { use } from 'react';

import { useEffect, useState } from "react";

// const fetchpromise=fetch('/Friends.json').then((res)=>res.json());
const AllFriends = () => {
    // const frineds=use(fetchpromise);
    // console.log(frineds);
    const [friends,setfriends]=useState([]) 

    useEffect(()=>{
    const fethdata=async ()=>{
       const res= await fetch('/Friends.json');
       const datas=await res.json();
       //console.log(datas);

       setfriends(datas)
    }
    fethdata()
    },[])
    console.log(friends)
    return (
        <>
    
        <div className='py-5 text-center '>
            <h1 className='font-semibold text-3xl'>My All Dusto Friends Here</h1>
            {/* <p>length of frinds:{frineds.length}</p> */}
        </div>
        <div>
         {
            friends.map((friend,index)=>{
                return <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            })
          }
        </div>
        </>

    );
};

export default AllFriends;