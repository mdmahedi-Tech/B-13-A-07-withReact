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
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={expectedData.picture}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{expectedData.name}</h2>
    <p>{expectedData.status}</p>
   <p>{expectedData.tags.map(tag=><h1>{tag}</h1>)}</p>
    <p>{expectedData.bio}</p>
    <p>{expectedData.email}</p>
    
  </div>
  <div className='flex justify-between'>
    <button onClick={btnhandle}
    className='btn btn-ghost'>Audio cll</button>
    <button onClick={videobtn}
    className='btn btn-ghost'>video cll</button>
    <button onClick={textbtn}
    className='btn btn-ghost'>text</button>
  </div>
</div>
        </>
    );
};

export default ShowDetails;