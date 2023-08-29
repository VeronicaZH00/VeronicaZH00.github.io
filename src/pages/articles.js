import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import ArticlePic from "../../public/images/articles/test.jpg"
import { useMotionValue } from 'framer-motion'
import {motion} from "framer-motion"

const FramerImage = motion(Image)

const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }


    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>
                {title}
            </h2>
            <FramerImage style={{x:x, y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:0.2}}}
            ref={imgRef} src={img} alt={title} 
            className='z-10 w-96 h-auto hidden absolute rounded-lg' />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return(
        <motion.li 
        initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary pl-4'>{date}</span>
        </motion.li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Veronica Chang | Articles Page</title>
            <meta name='description' content='ant description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text='Unveiling Thoughts, Sharing Stories' className='mb-16' />
                <ul>
                    <Article 
                        title="Hello World!"
                        date="Augest 28, 2023"
                        img={ArticlePic}
                        link="/"
                     />
                     <Article 
                        title="Hello World!"
                        date="Augest 28, 2023"
                        img={ArticlePic}
                        link="/"
                     />
                     <Article 
                        title="Hello World!"
                        date="Augest 28, 2023"
                        img={ArticlePic}
                        link="/"
                     />
                     <Article 
                        title="Hello World!"
                        date="Augest 28, 2023"
                        img={ArticlePic}
                        link="/"
                     />
                     <Article 
                        title="Hello World!"
                        date="Augest 28, 2023"
                        img={ArticlePic}
                        link="/"
                     />
                </ul>

            </Layout>
        </main>
    </>
  )
}

export default articles