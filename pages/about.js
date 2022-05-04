import React from 'react'
import Link from 'next/link'
import Head from 'next/dist/shared/lib/head'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <Head>
        <title>About</title>
        <meta name="description" content="Information about panda" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Blog, Nextjs, create, post, article, author, blogging" />
        <link rel="icon" href="/about.ico" />
      </Head>
    <style jsx>
      {`
      .about{
        height:calc(100vh - 56px);
        background-color: rgba(0,0,0,0.2);
        position:relative;
      }
      .about::after{
        content: ' ';
        width:100%;
        height:calc(100vh - 56px);
        position: absolute;
        background-image: url('/aboutbg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: -1;
        
        
      }
      `}
    </style>
    <div className="w-full flex flex-col items-center justify-start md:justify-center about text-white">
      <h2 className="text-2xl font-bold  md:pt-0 pt-5">
        Welcome to <Link href="/">Panda</Link>
      </h2>
      <p className='md:w-1/2 w-full box-border p-2'>
        Panda is a blog where you can write articles and share your thoughts.
        It is open source and you can contribute to it.
      </p>
      <h2 className="text-xl font-bold my-5 text-left">
        Technologies used in this blog
      </h2>
      <ul className="p-2">
        <li className="text-sm">
          <a href="https://nextjs.org/">Next.js</a>
        </li>
        <li className="text-sm">
          <a href="https://reactjs.org/">React</a>
        </li>
        <li className="text-sm">
          <a href="https://mongodb.com">Mongodb</a>
          </li>
        <li className="text-sm">
          <a href="https://nodejs.org/en/">Node.js</a>
        </li>
       </ul>
    </div>
    <Footer/>
    </>
  )
}

export default About