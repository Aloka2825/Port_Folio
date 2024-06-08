import React from 'react';

function Card({ title, icon }) {
  return (
    <div className="w-full p-10 h-24 rounded-lg shadow-shadowOne flex items-center 
      bg-gradient-to-r from-[#1f1f23] to-[#3d434a] group hover:bg-gradient-to-b hover:from-black 
      hover:to-[#1e2024] transition-colors duration-100">
      <div className='flex flex-col items-center justify-center w-full cursor-pointer'>
        <div className='flex flex-col gap-2 translate-y-1
        group-hover:translate-y-0 transition-transform duration-500'>
          <span className='text-5xl text-designColor'>{icon}</span>
        </div>
        <div className='flex flex-col gap-2 pt-2'>
          <h2 className='text-sm font-titleFont font-bold text-gray-300'>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
