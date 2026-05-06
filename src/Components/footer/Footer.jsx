import React from 'react';

const Footer = () => {
    return (
        <div className='bg-green-950 opacity-90 text-white  text-center pt-20 pb-10'>
            <div className='space-y-3 max-w-[960px] mx-auto'>
                <h1 className='text-5xl font-bold'>KeenKeeper</h1>
                <p className='text-gray-200'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-gray-200'>Social Links</p>
                <div className='flex justify-center items-center'>
                    <a href="/">facebook</a>
                    <a href="/">twitter</a>
                    <a href="/">youtube</a>
                </div>
                <div className='flex justify-between items-center pt-4 border-t-1 border-green-300'>
                   <p className='text-gray-300'>© 2026 KeenKeeper. All rights reserved.</p>
                   <div className='flex justify-between items-center gap-8 text-sm'>
                    <p className='text-gray-300'>Privacy Policy</p>
                    <p className='text-gray-300'>Terms of Service</p>
                    <p className='text-gray-300'> contact</p>
                   </div>
                </div>
            </div>
       
        </div>
    );
};

export default Footer;