import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <>
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aut voluptate incidunt architecto illum quis in optio id ab cupiditate voluptatibus unde numquam, voluptatum aliquam. Expedita possimus provident, aspernatur officiis praesentium consectetur quasi perspiciatis nam? Corporis dicta nihil autem voluptates earum? Dolorum quaerat laudantium id.
      </p>
    </div>
    </>
  )
}

export default About