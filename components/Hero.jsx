import React from 'react'

export default function Hero() {
    return (
        <section className='bg-black'>
            <div className='px-10 flex'>
                <div className=' py-32 space-y-3 w-1/2'>
                    <h1 className='text-5xl font-kanit font-bold text-white'>Personalised UPI and</h1>
                    <h1 className='text-5xl font-kanit font-bold text-white'>card for</h1>
                    <p className='text-2xl text-gray-400 font-bold'>Say hello to a world of secure payments</p>
                    <div className='flex justify-between items-center py-4'>
                        <button className='py-3 px-7 text-3xl rounded-full font-bold border-blue-500 border-[3px] text-blue-500'>Get your own UPI</button>
                        <button className='py-3 px-7 text-3xl rounded-full font-bold border-blue-500 border-[3px] text-white bg-blue-500'>I'm a curious parent</button>
                    </div>
                </div>
                <div className=' space-y-3 w-1/2'>

                </div>
            </div>


            <div className='bg-slate-900 flex h-[132px] py-2 space-x-10 px-10'>
                <img src="/images/rating.png" alt="" />
                <img src="/images/users.png" alt="" />
                <a href="#">
                    <div className='space-y-2 py-3'>
                        <h1 className='text-white text-xl font-bold'>Download <span className='text-blue-500'>Fampay</span> now!</h1>
                        <div>
                            <p className='text-gray-400'>And take your first step towards</p>
                            <p className='text-gray-400'>financial freedom</p>
                        </div>
                    </div>


                </a>
            </div>
        </section>
    )
}
