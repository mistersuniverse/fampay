import React from "react";
import Image from 'next/image';
import SupportChatGif2 from '../public/images/SupportChatGif2.gif';

export default function Footer() {
    return (

        <section className="py-5 bg-black">

            <div className="w-[200] bg-black flex justify-between ">
                <Image src={SupportChatGif2} alt="my gif" height={400} width={400} />
                <div className="bg-black font-sans text-right w-[200] pr-20 pt-20 flex">
                    <h1 className="text-white text-5xl w-[-2/3] font-bold ">Our support team is <span className="text-orange-500 &nbsp">active 24 x 7 <p className="text-gray-600 text-xl pt-10"> Feel free to chat with our support team whenever you need more clarity </p></span></h1>
                </div>
            </div>

            <div className=" bg-black text-center font-kanit font-extrabold ">
                <h1 className="text-5xl text-white"> Over <span className="text-orange-500"> 10 million </span>happy stories</h1>

                 </div>


  <div className="text-center pt-10 font-kanit font-bold space-x-10">
 <h1 className="text-5xl text-white  "> We are <span className="text-orange-500"> trusted </span>  by</h1>
 </div>
 <div className="flex font-kanit cursor-pointer pt-10 pb-10 justify-between">
                <img src="/images/x1.png" height={100} width={250} alt="" />
                <img src="/images/x2.png" height={100} width={250} alt="" />
                <img src="/images/x3.png"  height={100} width={250} alt="" />
                <img src="/images/x4.png" height={100} width={250}  alt="" />
                </div>
                 <div className="flex pt-10 font-kanit pb-5 cursor-pointer justify-between">
                <img src="/images/x5.png" height={100} width={250}  alt="" />
                
                <img src="/images/x6.png" height={100} width={250}  alt="" />
                <img src="/images/x7.png" height={100} width={250}  alt="" />
                <img src="/images/x8.png" height={100} width={250}  alt="" />
         </div>
         <div className="w-[200] bg-black flex left-2 justify-between pt-20">
               <img src="/images/n1.png" height={200} width= {500} alt="" />
                
                    <h1 className="text-white text-5xl w-[-2/3]  font-bold ">Want to shape finance for the <span className="text-orange-500 pt-5 ">next gen? </span></h1>
                    </div>
                    <div className="flex justify-between">
                    <a href="#"><button className='px-4 py-2 flex bg-yellow-500 rounded-full'>join the fam </button></a>
                    
                
            </div>
             
        
        </section>

    )
 



    

}



















