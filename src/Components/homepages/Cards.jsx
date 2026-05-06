import React from 'react';

const Cards = () => {
    return (
        <div className='max-w-[960px] mx-auto text-center space-y-4 py-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-gray-100 py-10 px-2 shadow rounded-sm'>
                    <p className='font-bold text-2xl'>10</p>
                    <h1 className='text-gray-800 font-semibold'>total friend</h1>
                </div>
                <div className='bg-gray-100 py-10 px-2 shadow rounded-sm'>
                    <p className='font-bold text-2xl'>3</p>
                    <h1 className='text-gray-800 font-semibold'>on track</h1>
                </div>
                <div className='bg-gray-100 py-10 px-2 shadow rounded-sm'>
                    <p className='font-bold text-2xl'>6</p>
                    <h1 className='text-gray-800 font-semibold'>Need Attentions</h1>
                </div>
                <div className='bg-gray-100 py-10 px-2 shadow rounded-sm'>
                    <p className='font-bold text-2xl'>12</p>
                    <h1 className='text-gray-800 font-semibold'>interaction this month</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Cards;