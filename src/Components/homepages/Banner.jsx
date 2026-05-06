import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-[1200px] mx-auto text-center space-y-4 py-10'>
           <h1 className='text-4xl font-bold'>Friends to keep close in your life</h1>
           <p className='text-gray-800'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                <br />relationships that matter most.</p>
                <button className='btn btn-ghost bg-green-950 text-white rounded-sm'> + Add a friend</button>
        </div>
    );
};

export default Banner;