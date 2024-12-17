import Image from 'next/image';

import React from 'react'

export default function BlogCards() {
  return (
    <div className='w-[1920px]'>
      <section>
      <h2 className="text-center text-violet-950 text-5xl font-bold mt-20 shadow-sm">Latest Products</h2>
      <div className="items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
        <img src='/Leatest blog 1.png' className='shadow-md hover:shadow-lg transition-shadow ml-44'></img>
        <img src='/Leatest blog 2.png'className='shadow-md hover:shadow-lg transition-shadow ml-56' ></img>
        <img src='/Leatest blog 3.png'className='shadow-md hover:shadow-lg transition-shadow ml-64' ></img>
      </div>
      </section>
      
    </div>
  )
}
