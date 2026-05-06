import React, { useContext } from 'react';
import { ContextApi } from '../../contextApi/Contextapiseparete';

const Timeline = () => {
   const {audio,setaudion}=useContext(ContextApi);
         console.log(audio,setaudion)
         const date=new Date()
    return (
      <div className='py-8 container mx-auto'>
        <h1 className='font-bold text-2xl '>TimeLine</h1>
        <div>
          <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">Filter timeline</div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a>call</a></li>
          <li><a>video</a></li>
          <li><a>text</a></li>
        </ul>
      </div>
        </div>
          <div className=' bg-amber-50 shadow m-4'>
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