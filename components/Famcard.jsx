import React from 'react'

export default function Famcard() {
    return (
        <section className='px-10 py-32 bg-[#212529] text-white pl-24 flex items-center justify-between'>
            <div className='w-2/5'>
                <img src="/images/famcard.png" alt="" />
            </div>
            <div className='w-3/5 pl-[120px] font-kanit'>

                <div className='flex justify-end'>
                    <div>
                        <h1 className='text-5xl'><span className='text-blue-500'>FamCard</span></h1><div className='space-y-5 pt-5'>
                            <div className='flex items-center'>
                                <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                                <h2 className='text-2xl'>Tap & Pay with your personalised card</h2>
                            </div>
                            <div className='flex items-center'>
                                <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                                <h2 className='text-2xl'>A numberless card that keeps all your info secure+</h2>
                            </div>
                            <div className='flex items-center'>
                                <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                                <h2 className='text-2xl'>Design your own card with a customised name and doodles</h2>
                            </div>
                            <div className='flex items-center'>
                                <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                                <h2 className='text-2xl'>Super safe card that you can block or pause anytime</h2>
                            </div>
                            <div className='flex justify-end'>
                                <div>
                                    <button className='text-3xl bg-blue-500 rounded-full py-3 px-7 text-center'>Download Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



