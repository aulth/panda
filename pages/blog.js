import React, {useEffect, useState} from "react";
import Blogitem from "../components/Blogitem";
import Head from "next/dist/shared/lib/head";
import Footer from "../components/Footer";
const Blogs = (props) => {
  console.log(props.blogs.posts)
  const [articles, setArticles] = useState(props.blogs.posts)
  return (
    <>
    <Head>
        <title>Panda - Blogs</title>
        <link rel="icon" href="/blog.ico" />
        <meta name="description" content="All blogs posted on mypanda.vercel.app" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Blog, Nextjs, create, post, article, author, blogging" />
      </Head>
      <div className="w-full home flex flex-col items-center text-white">
        <h2 className="text-xl my-5 text-left font-bold ">Latest Blogs</h2>
        <ul className="p-2">
          {articles && articles.length>0 && articles.map((article, index)=>{
            return <Blogitem key={index} title={article.title} author={article.author} url={article.url} image={article.image} description={article.description}/>
          })}
        </ul>
      </div>
      <Footer/>
    </>
  );
};


export async function getServerSideProps(context){
  let response = await fetch('https://mypanda.vercel.app/api/getarticle')
  let blogs = await response.json();
  return {
    props: {
      blogs : blogs
    }
  }
}
export default Blogs;
