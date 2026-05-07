import React from 'react';
import { Link } from 'react-router';

const DetailsFreinds = ({friend}) => {
    return (
        <>
        <Link to={`/homepage/${friend.id}`}>
        <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p className='font-semibold text-gray-700'>{friend.days_since_contact}d ago</p>
    <p className='bg-green-300 rounded-2xl py-2 px-4'>{friend.tags[0]}</p>
    <p className={` rounded-sm text-white px-4 ${friend.status === 'almost due' 
    ? 'bg-red-700' 
    :friend.status === 'overdue' 
    ? 'bg-yellow-400' 
    :'bg-green-700'}`}>
      {friend.status}</p>
    
    
  </div>
</div>
        </Link>
        </>
    );
};

export default DetailsFreinds;