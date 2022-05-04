import Head from 'next/head'
// import Blogs, { getServerSideProps } from './blog'
import Blogitem from '../components/Blogitem'
export default function Home(props) {
  const posts = props.blogs.posts
  return (
    <>
      <style jsx>
        {`
        
        `}
      </style>
      <Head>
        <title>Panda - Blog</title>
        <meta name="description" content="Panda - Best Blogging Platform" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="2Ii8X_9GYq3lZtKo33o6boJYW9GMfW3hWW1IhUKLKHE" />
      </Head>
      <div className="w-full flex flex-col items-center box-border home text-white">
        <h1 className="text-2xl my-3">
          Panda - Best Blogging Platform
        </h1>
        <div className="w-full bg-transparent flex flex-col mt-5 items-center">
          <ul>
            {
              posts.map((post, index)=>{
                return <Blogitem key={index} title={post.title} author={post.author} url={post.url} image={post.image} description={post.description}/>
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps(context){
  let response = await fetch('https://mypanda.vercel.app/api/getarticle')
  let blogs = await response.json();
  return {
    props:{
      blogs : blogs
    }
  }
}
