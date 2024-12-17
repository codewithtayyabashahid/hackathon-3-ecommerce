import React from 'react'

export default function Trending() {
  return (
    <div className='w-[1920px]'>
        {/**UNIQUE SOFA SECTION */}
      <section className='bg-violet-50 h-[579px] mt-36'>
        <div className='flex items-center justify-between'>
        <img src='/unique feature sofa.png' className='ml-[400px] mt-6'></img>
        </div>
</section>


        {/**TRENDING PRODUCTS */}
        <section>
        <h2 className="text-center text-violet-950 text-5xl font-bold mt-36 shadow-sm">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-52 pt-5">
            <img src='/Trending products 1.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
            <img src='/Trending products 2.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
            <img src='/Trending products 3.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
            <img src='/Trending products 4.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
        </div>
        <div className='items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-2 gap-2 px-80 pt-10'>
    <img src='/Group 154.png' className='shadow-md hover:shadow-lg transition-shadow ' ></img>
    <img src='/Group 155.png' className='shadow-md hover:shadow-lg transition-shadow'></img>
    <div className='grid grid-rows-1 sm:grid-rows-1 md:grid-rows-1 gap-4 space-x-5 '>
    <img src='/Trnding products list 1.png' className='shadow-md hover:shadow-lg transition-shadow  ' ></img>
            <img src='/Trnding products list 2.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
            <img src='/Trnding products list 3.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
        </div>
    </div>
 </section>
       
        
        {/**DISCOUNT ITEMS */}
        <section>
        <h2 className="text-center text-violet-950 text-5xl font-bold mt-36 shadow-sm">Discount Items</h2>
        <div className='flex justify-center mb-6 space-x-6 flex-wrap'>
        {['Wood Chair','Plastic Chair','Sofa Collection'].map((tab)=>(
          <button key={tab} className='text-blue-500 font-medium hover:underline mt-7'>
            {tab}
          </button>
        ))}
   </div>
   <img src='/discount sofa.png' className='ml-[500px]'></img>
</section>

       {/**TOP CATEGORIES */}
       <section>
       <h2 className="text-center text-violet-950 text-5xl font-bold mt-36 shadow-sm">Top Categories</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-52 pt-10">
            <img src='/Top catagories 1.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
            <img src='/Top catagories 2.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
            <img src='/Top catagories 3.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
            <img src='/Top catagories 4.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
        </div>

        <img src='/Group 162.png' className='mt-60'></img>
        <img src='/image 1174.png' className='mt-60 ml-[500px]'></img>
        </section>

    </div>
  )
}
