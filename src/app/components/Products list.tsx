import Image from 'next/image';

const Productslist: React.FC = () => {
  return (
    <div className='w-[1920px]'>
      {/**FEATURED PRODUCTS LIST */}
    <section className="py-10">
      <h2 className="text-center text-violet-950 text-5xl font-bold mt-14 shadow-sm">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-52 pt-5">
        <img src='/Featured product 1.png' className='shadow-md hover:shadow-lg transition-shadow'></img>
        <img src='/Group 152.png'className='shadow-md hover:shadow-lg transition-shadow' ></img>
        <img src='/Component 3.png'className='shadow-md hover:shadow-lg transition-shadow' ></img>
        <img src='/Component 4.png'className='shadow-md hover:shadow-lg transition-shadow' ></img>
      </div>
    </section>


    {/**LATEST PRODUCTS LIST */}
    <section>
      <h2 className='text-5xl text-violet-950 font-bold text-center mt-24'>Latest Products</h2>
      <div className='flex justify-center mb-6 space-x-6 flex-wrap'>
        {['New Arrival','Best Seller','Featured','Special Offer'].map((tab)=>(
          <button key={tab} className='text-blue-500 font-medium hover:underline mt-7'>
            {tab}
          </button>
        ))}
   </div>
   <div className='items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-2 gap-2 px-80 pt-10'>
    <img src='/latest 1.png' className='shadow-md hover:shadow-lg transition-shadow ' ></img>
    <img src='/latest 2.png' className='shadow-md hover:shadow-lg transition-shadow'></img>
    <img src='/latest 3.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>

   </div>
   <div className='items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-2 gap-2 px-80 pt-28'>
    <img src='/latest 4.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>
    <img src='/latest 5.png' className='shadow-md hover:shadow-lg transition-shadow'></img>
    <img src='/latest 6.png' className='shadow-md hover:shadow-lg transition-shadow' ></img>

   </div>
   </section>
   </div>
  );
};

export default Productslist;