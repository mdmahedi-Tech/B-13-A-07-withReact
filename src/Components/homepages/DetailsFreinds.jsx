import React from 'react';

const DetailsFreinds = ({friend}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>{friend.days_since_contact}d ago</p>
    <p>{friend.tags.map(tag=><h1>{tag}</h1>)}</p>
    <p>{friend.status}</p>
    
    
  </div>
</div>
    );
};

export default DetailsFreinds;