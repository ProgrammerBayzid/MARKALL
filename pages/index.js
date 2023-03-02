import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import Time from '@/components/Time/Time'
import Customer from '@/components/Customer/Customer'
import Contact from '@/components/Contact/Contact'
import ContactUs from '@/components/ContactUs/ContactUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <Header></Header>
     <Hero></Hero>
     <Features></Features>
     <Time></Time>
     <Customer></Customer>
     <Contact></Contact>

     <div className='absolute top-[2000px] left-[700px] right-0'>

<ContactUs></ContactUs>
     </div>


    </div>
  )
}
