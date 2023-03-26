import React from 'react'

export default function Fammaster() {
  return (
    <section className='px-10 py-32 bg-[#212529] text-white pl-24 flex items-center'>
      <div className='w-3/5 font-kanit'>
        <h1 className='text-5xl'>Be a <span className='text-blue-500'>FamMaster</span> of your <span className='text-blue-500'>Campus</span></h1><div className='space-y-5 pt-5'>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Win guaranteed rewards each month</h2>
          </div>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Get extra discount for each transaction</h2>
          </div>
          <div className='flex items-center'>
            <img src="/images/verified.png" alt="" className='h-7 mr-5' />
            <h2 className='text-2xl'>Collect FamCoins with each and every activity in Fampay</h2>
          </div>
          
          <div className='flex justify-start'>
            <div>
              <button className='text-3xl bg-blue-500 rounded-full py-3 px-7 text-center'>Download Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-2/5'>
        <img src="/images/04.gif" alt="" className='max-h-[80vh]'/>
      </div>

    </section>
  )
}
