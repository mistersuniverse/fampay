import React from 'react'

export default function Safepay() {
  return (
    <section className='px-10 py-32 bg-[#212529] text-white pl-24 flex items-center'>
    <div className='w-3/5 font-kanit'>
      <h1 className='text-5xl'><span className='text-blue-500'>Safe</span> and <span className='text-blue-500'>Secure</span> payments</h1><div className='space-y-5 pt-5'>
        <div className='flex items-center'>
          <img src="/images/verified.png" alt="" className='h-7 mr-5' />
          <h2 className='text-2xl'>FamPay is powered by Visa and backed by IDFC First Bank</h2>
        </div> 
        <div className='flex items-center'>
          <img src="/images/verified.png" alt="" className='h-7 mr-5' />
          <h2 className='text-2xl'>All UPI payments are device lock protected</h2>
        </div>
        <div className='flex items-center'>
          <img src="/images/verified.png" alt="" className='h-7 mr-5' />
          <h2 className='text-2xl'>There is no linking to your parents' bank account</h2>
        </div>
        <div className='flex items-center'>
          <img src="/images/verified.png" alt="" className='h-7 mr-5' />
          <h2 className='text-2xl'>Two-factor authentication on all payments</h2>
        </div>
        <div className='flex justify-start'>
          <div>
            <button className='text-3xl bg-blue-500 rounded-full py-3 px-7 text-center'>Download Now</button>
          </div>
        </div>
      </div>
    </div>

    <div className='w-2/5'>
      <img src="/images/pay.png" alt="" />
    </div>

  </section>
  )
}
