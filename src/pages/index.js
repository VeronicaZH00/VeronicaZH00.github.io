import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from '../../public/images/profile/veronica-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons';


//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex Items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="Veronica" className='w-full h-auto object-cover'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <h1></h1>
              <AnimatedText text="Veronica Chang" className='!text-6xl !textleft'/>
              <p className='my-4 text-base font-medium'>
                As a growing developer, I am committed to transforming creativity into feasible development solutions.
                Explore my former projects and articles, showcasing my experience in coding and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/veronicaZH_resume.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark'
                download={true}
                >Resume <LinkArrow className={'w-6 ml-1'}/>
                </Link>

                <Link href="mailto:veronica.hc901@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
