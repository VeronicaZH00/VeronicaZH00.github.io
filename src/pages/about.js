import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/veronica-pic-2.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, {once:true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Veronica Chang | About Page</title>
            <meta name='description' content='ant description' />
        </Head>
      <main className='flex w-full flex col items-center justify-center'>
        <Layout className='pt-12'>
        <AnimatedText text='Crafting Careers, Living Dreams' className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                <p className='my-4 font-midium'>
                    Paragraph 1
                </p>
                <p className='my-4 font-midium'>
                    Paragraph 2
                </p>
                <p className='my-4 font-midium'>
                    Paragraph 3
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                    <Image src={profilePic} alt='Veronica' className='w-full h-auto rounded-2xl'/>  
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={0}/>0
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={0}/>0
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>
                </div>
            </div>

        </div>
        </Layout>
      </main>
    </>
  )
}

export default about