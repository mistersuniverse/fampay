import React from 'react'

export default function Track() {
  return (
    <section className='px-10 py-32 bg-[#363e47] text-white pl-24 flex items-center'>
      <div className='w-3/5 font-kanit'>
        <h1 className='text-5xl'>Organize your <span className='text-blue-500'>Expenses,</span> </h1>
        <h1 className='text-5xl'>Organize your <span className='text-blue-500'>Life</span> </h1><div className='space-y-5 pt-5'>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Keep a track of your expenses</h2>
          </div>
          {/* <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Get your expenses oraganized</h2>
          </div> */}
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Set monthly spending limit to a category</h2>
          </div>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Learn the true Money Management</h2>
          </div>
          <div className='flex justify-start'>
            <div>
              <button className='text-3xl bg-blue-500 rounded-full py-3 px-7 text-center'>Download Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-2/5'>
        <img src="/images/expense.gif" alt="" />
      </div>

    </section>
  )
}
