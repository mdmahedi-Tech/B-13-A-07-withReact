import { useEffect, useState } from "react";

const CustomsHook = () => {

     const [friends,setfriends]=useState([]) ;
        const [loading,setloading]=useState(true);
    
        useEffect(()=>{
        const fethdata=async ()=>{
           const res= await fetch('/Friends.json');
           const datas=await res.json();
           
    
           setfriends(datas)
           setloading(false)
        }
        fethdata()
        },[])

    return {friends,loading}
};

export default CustomsHook;