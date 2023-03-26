import React from 'react'

export default function Famhunt() {
  return (
    <section className='px-10 py-32 bg-[#363e47] text-white pl-24 flex items-center'>
      <div className='w-3/5 font-kanit'>
        <h1 className='text-5xl'>Become a <span className='text-blue-500'>Famhunter</span></h1><div className='space-y-5 pt-5'>
          <div className='flex '>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <div>
            <h2 className='text-2xl'>Check map to get maximum FamCoins and Discounts</h2>
            <h2 className='text-2xl'> offered by different shops</h2>
            </div>
          </div>
              
          {/* <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Set a spending limit to a category</h2>
          </div>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Learn a true money management</h2>
          </div> */}
          <div className='flex justify-start'>
            <div>
              <button className='text-3xl bg-blue-500 rounded-full py-3 px-7 text-center'>Download Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-2/5'>
        <img src="/images/06.gif" alt="" className='max-h-[80vh]'/>
      </div>

    </section>
  )
}
