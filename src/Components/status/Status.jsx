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
        <div className='text-center'>
            <h1>status update with charts</h1>
        </div>

        <div className='flex justify-center items-center'>
            
             <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
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
        </>
    );
};

export default Status;