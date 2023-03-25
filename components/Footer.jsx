import React from "react";
import Image from 'next/image';
import SupportChatGif2 from '../public/images/SupportChatGif2.gif'
export default function Footer() {
    return (
        <section className="py-5 bg-[#212529] px-10">

            <div className="w-[200] bg-[#212529] flex justify-between ">
                <Image src={SupportChatGif2} alt="my gif" height={400} width={400} />
                <div className="bg-[#212529] font-sans text-right w-[200] pr-20 pt-20 flex">
                    <h1 className="text-white text-5xl w-[-2/3] font-bold ">Our support team is <span className="text-orange-500 &nbsp">active 24 X 7 <p className="text-gray-600 text-xl pt-10"> Feel free to chat with our support team whenever you need more clarity </p></span></h1>
                </div>
            </div>

            <div className=" bg-[#212529] text-center font-kanit font-extrabold ">
                <h1 className="text-5xl text-white  "> Over <span className="text-orange-500"> 10 million </span>happy stories</h1>
            </div>
        </section>
    )
}

























