import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import projectPic from "../../public/images/projects/Blank.jpg"
import Image from 'next/image'

const Project = ({title, img,summary ,link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light shadow-2xl p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto object-cover' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='my-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-8'><GithubIcon/></Link>
                    <Link href={link} target="_blank"
                    className='ml-4 text-lg font-semibold underline'
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
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='My Projects'
                className='mb-16'
                />

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-6'>
                        <Project
                        title='AAA'
                        img={projectPic}
                        summary='a good weather'
                        link="/"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='AAA'
                        img={projectPic}
                        summary='a good weather'
                        link="/"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='AAA'
                        img={projectPic}
                        summary='a good weather'
                        link="/"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='AAA'
                        img={projectPic}
                        summary='a good weather'
                        link="/"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='AAA'
                        img={projectPic}
                        summary='a good weather'
                        link="/"
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