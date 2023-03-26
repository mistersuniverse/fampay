import React from 'react'

export default function Famfd() {
    return (
        <section className='px-10 py-32 bg-[#212529] text-white flex items-center'>
            <div className='w-2/5'>
                <img src="/images/03.gif" alt="" className='max-h-[80vh]'/>
            </div>
            <div className='w-3/5 font-kanit'>
                <div className='flex justify-end pr-24'>
                    <div>
                        <h1 className='text-5xl'>Introducing Fam<span className='text-blue-500'>FD</span></h1>
                        <div className='space-y-5 pt-5'>
                            <div className='flex items-center'>
                                <img src="/images/verified.png" alt="" className='h-7 mr-5' />
                                <h2 className='text-3xl'>Spend Extra, Save Extra with FamChillars</h2>
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
                        <div className='grid-cols-2 grid pt-10 gap-5'>
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold text-blue-500'>What is FamChillar?</h1>
                                <p className=''>Introducing FamChillar - the feature that lets you round up your purchases and save extra money in a fixed deposit account with higher interest rates.

                                    Let's say you go shopping and your bill comes out to be Rs. 743. With FamChillar, you can choose to round up your payment to Rs. 750, and the extra Rs. 7 will be automatically transferred to your FamChillar account. This may seem like a small amount, but imagine doing this every time you make a purchase. Over time, those small amounts can add up to a significant amount of savings.

                                    And the best part? The money in your FamChillar account is invested in a fixed deposit account with higher interest rates, which means your savings will grow faster. Plus, you can withdraw your money anytime you want without any penalty.

                                    With FamChillar, you can save money effortlessly while you shop, and watch your savings grow with higher interest rates. Sign up for FamPay today to start using this feature and take control of your savings.</p>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold text-blue-500'>What is FamFD?</h1>
                                <p className=''>Introducing FamChillar, the feature that helps you save money effortlessly! With FamChillar, you can now round up your payments to the nearest 10 and the extra amount will be invested in a Fixed Deposit with attractive interest rates.

But that's not all! We also offer a unique feature(beside personal FD) where you can create a group with your friends, family or colleagues and pool in money to form a Fixed Deposit. This FD can be used as an interest-free credit line for emergencies, special occasions, or even for your dream vacation! And the best part? You don't have to worry about high interest rates or hidden fees!

Joining a FamChillar group is super easy, and you can start with as little as Rs. 10. So why wait? Sign up now and start saving with FamPay!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

