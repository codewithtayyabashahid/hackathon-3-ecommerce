import React from 'react'

export default function Hero() {
  return (
    <main className=''>
    <div className='bg-violet-50 mt-28 w-[1920px] h-[764px]'>
      <div className="flex items-center relative">
        <img src="/image 32.png" className='mb-96' />
        <img src="/header text.png" className='mb-44 mr-16' />
        <button 
        className='absolute bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600 transition'
        style={{ top: 'calc(50% + 110px)', left: '380px' }}
      >
        Shop Now
      </button>
  
        <img src='/sofa promotional header.png' className='ml-[50px]'></img>
      </div>
    </div>  
  </main>
  
    
    )
  }

