
import DetailsFreinds from "./DetailsFreinds";

import CustomsHook from "../../hooks/CustomsHook";

// const fetchpromise=fetch('/Friends.json').then((res)=>res.json());
const AllFriends = () => {
    const {friends,loading}=CustomsHook()
   
   
    console.log(loading,friends)
    return (
        <>
    
        <div className='py-5 text-center '>
            <h1 className='font-semibold text-3xl text-blue-950'>Friends are the colors that make life more beautiful.</h1>
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