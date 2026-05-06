import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { ContextApi } from '../../contextApi/Contextapiseparete';

const Status = () => {
const {audio,setaudion}=useContext(ContextApi);
         console.log(audio,setaudion)

    const data = [
  { name: "audio Calls", value: 12, fill: "#22c55e" }, // green
  { name: "video Calls", value: 5, fill: "#ef4444" },     // red
  { name: "text Calls", value: 3, fill: "#f59e0b" }     // yellow
];
    return (
       
        <>
       <div className='max-w-[1200px] mx-auto py-8'>
         <div className='space-y-6 text-xl font-semibold'>
           <h1 className='text-3xl font-bold'> Friendship Analytics</h1>
           <p>By Interaction Type</p>
        </div>

        <div className='flex justify-center items-center'>
            
             <PieChart style={{ width: '80%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      {/* <RechartsDevtools /> */}
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
        </div>
       </div>
        </>
    );
};

export default Status;