import React from 'react'

export default function Famconnect() {
  return (
    <section className='px-10 py-32 bg-[#212529] text-white flex items-center'>
    <div className='w-2/5'>
        <img src="/images/refer.png" alt="" />
    </div>
    <div className='w-3/5 font-kanit'>
        <div className='flex justify-end pr-24'>
            <div>
                <h1 className='text-5xl'>Introducing Fam<span className='text-blue-500'>Connect</span></h1>
                <div className='space-y-5 pt-5'>
                    <div className='flex items-center'>
                        <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                        <h2 className='text-3xl'></h2>
                    </div>
                    <div className='flex items-center'>
                        <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                        <h2 className='text-3xl'>Get a FD by paying in Round-offs of 10</h2>
                    </div>
                    <div className='flex items-center'>
                        <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                        <h2 className='text-3xl'>Get credit using personal & group FDs</h2>
                    </div>
                    <div className='flex justify-end'>
                        <div>
                            <button className='text-3xl bg-blue-500 rounded-full py-3 px-7 text-center'>Get Fam<span className='text-white font-bold'>FD</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</section>  )
}
