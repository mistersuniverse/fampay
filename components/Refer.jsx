import React from 'react'

export default function Refer() {
  return (
    <section className='px-10 py-32 bg-[#363e47] text-white pl-24 flex items-center'>
      <div className='w-3/5 font-kanit'>
        <h1 className='text-5xl'>Refer to your <span className='text-blue-500'>Friends</span> and</h1>
        <h1 className='text-5xl'>Earn <span className='text-blue-500'>rewards</span></h1>
        <div className='space-y-5 pt-5'>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-3xl'>Get you friend know about Fampay!</h2>
          </div>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-3xl'>Get assured money on reffering to a friend</h2>
          </div>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-3xl'>Help us in making a FamFull world</h2>
          </div>
          <div className='flex justify-start'>
            <div>
              <button className='text-3xl bg-blue-500 rounded-full py-3 px-7 text-center'>Start referring</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-2/5'>
        <img src="/images/refer.png" alt="" />
      </div>

    </section>
  )
}
