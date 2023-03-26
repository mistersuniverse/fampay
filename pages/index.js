import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Refer from '@/components/Refer'
import Famfd from '@/components/Famfd'
import Footer from '@/components/Footer'
import Track from '@/components/Track'
import Safepay from '@/components/Safepay'
import Famcard from '@/components/Famcard'
import Fammaster from '@/components/Fammaster'
import Famhunt from '@/components/Famhunt'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Navbar/>
        <Hero/>
        <Track/>
        <Famfd/>
        <Famhunt/>
        <Fammaster/>
        <Refer/>
        <Safepay/>
        <Famcard/>
        <Footer/>
    
      </main>
      </>
  )
}
