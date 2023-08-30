import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import projectPic from "../../public/images/projects/test.jpg"
import Image from 'next/image'
import {motion} from "framer-motion"

const FramerImage = motion(Image);

const Project = ({title, img,summary ,link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark 
            dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}} transition={{duration:0.2}}
                priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark/75 dark:text-light/75 lg:text-base md:text-sm'>{summary}</p>
                <div className='w-full mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link>
                    <Link href={link} target="_blank"
                    className='ml-4 text-lg font-semibold underline md:text-base'
                    >Visit</Link>
                </div>
            </div>
        </article>

    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Veronica Chang | Projects Page</title>
            <meta name='description' content='ant description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Ideas Formed, Wonders Created'
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title='The First Project'
                        img={projectPic}
                        summary='a good weather'
                        link="/projects/the first project"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title='The Second Project'
                        img={projectPic}
                        summary='a good weather'
                        link="/projects/the second project"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title='The Third Project'
                        img={projectPic}
                        summary='a good weather'
                        link="/projects/the third project"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title='The Forth Project'
                        img={projectPic}
                        summary='a good weather'
                        link="/projects/the forth project"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title='The Fifth Project'
                        img={projectPic}
                        summary='a good weather'
                        link="/projects/the fifth project"
                        github="/"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects
