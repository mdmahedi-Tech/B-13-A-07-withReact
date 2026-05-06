import React, { useContext } from 'react';
import { ContextApi } from '../../contextApi/Contextapiseparete';

const Timeline = () => {
   const {audio,setaudion}=useContext(ContextApi);
         console.log(audio,setaudion)
         const date=new Date()
    return (
      <div className='py-8 container mx-auto'>
        <h1 className='font-bold text-2xl '>TimeLine</h1>
          <div className=' bg-amber-50 shadow p-4 gap-5'>
           {
            audio.map((audios,index)=>{
                return <div key={index}>
                    
                    <p ><span className='font-bold'>call with</span> {audios.name}</p>
                    
                     {date.toLocaleDateString()}
                </div>
            })
           }
        </div>
      </div>
    );
};

export default Timeline;