import React, { useContext } from 'react';
import { useParams } from 'react-router';
import CustomsHook from '../../hooks/CustomsHook';
import { ContextApi } from '../../contextApi/Contextapiseparete';
import { toast } from 'react-toastify';


const ShowDetails = () => {
    const {dynamicId}=useParams();
    // console.log(dynamicId)
     const {friends,loading}=CustomsHook()
    //  console.log(friends)
     const expectedData=friends.find(frind=>frind.id == dynamicId);
    //  console.log(expectedData);
     const {audio,setaudion}=useContext(ContextApi);
      // console.log(audio,setaudion)

     if(loading){
        return <h1>loading</h1>
     }
     const btnhandle=()=>{
      setaudion([...audio,expectedData])
      // console.log('click')
      toast(`audio call with ${expectedData.name}`);
     }
     const videobtn=()=>{
      setaudion([...audio,expectedData])
      // console.log('click')
      toast(`video call with ${expectedData.name}`);
     }
     const textbtn=()=>{
      setaudion([...audio,expectedData])
      // console.log('click')
      toast(`text with ${expectedData.name}`);
     }

     // state for btn
      
    return (
      
        <>
        <div className="max-w-5xl mx-auto bg-gray-100 p-6 rounded-xl shadow">
      
      <div className="grid grid-cols-4 gap-4">
        
        {/* LEFT PROFILE */}
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <img
            src={expectedData.picture}
            alt="profile"
            className="w-20 h-20 mx-auto rounded-full"
          />

          <h2 className="mt-3 font-semibold text-lg">{expectedData.name}</h2>

          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
            {expectedData.status}
          </span>

          <div className="mt-2">
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
             <p>{expectedData.tags.map(tag=><h1>{tag}</h1>)}</p>
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2 italic">
            {expectedData.bio}
          </p>

          <p className="text-xs text-gray-400 mt-1">{expectedData.email}</p>

          {/* Buttons */}
          <div className="mt-4 space-y-2 text-sm">
            <button className="w-full border rounded-md py-1 hover:bg-gray-100">
              Snooze 2 Weeks
            </button>
            <button className="w-full border rounded-md py-1 hover:bg-gray-100">
              Archive
            </button>
            <button className="w-full border rounded-md py-1 text-red-500 hover:bg-red-50">
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-3 space-y-4">
          
          {/* TOP STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h1 className="text-2xl font-bold">{expectedData.days_since_contact}</h1>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h1 className="text-2xl font-bold">{expectedData.goal}</h1>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h1 className="text-lg font-semibold">{expectedData.next_due_date}</h1>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div>
              <h2 className="font-semibold">Relationship Goal</h2>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-semibold">30 days</span>
              </p>
            </div>

            <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* QUICK ACTION */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-3">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-4">
              <button onClick={btnhandle}
              className="border p-4 rounded-lg hover:bg-gray-100">
                📞 Call
              </button>
              <button onClick={textbtn}
              className="border p-4 rounded-lg hover:bg-gray-100">
                💬 Text
              </button>
              <button onClick={videobtn}
              className="border p-4 rounded-lg hover:bg-gray-100">
                🎥 Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
        </>
    );
};

export default ShowDetails;