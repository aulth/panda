import React ,{useEffect, useState} from 'react'
import ErrorPage from 'next/error'
const Slug =  (props) => {
  const [blog, setBlog] = useState(props.blog.blog)
  function createMarkup(content){
    return {
      __html: content
    }
  }
  return (
    <>
     {
       blog &&
       <div className="w-full flex flex-col items-center box-border p-2">
      <div className="w-full flex flex-col box-border p-2 items-center border-b border-gray-300">
      <h1 className="text-2xl font-bold">
       {blog.title}
      </h1>
      <p>Date : {blog.date}</p>
      </div>
      <div className="w-full flex flex-col items-center box-border blogpost" dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
    </div>
     }
     
     {
       !blog && 
       <ErrorPage statusCode={404} />
     }
    </>
    
  )
}


export async function getServerSideProps(context){
  let {url} = context.query;
  let response = await fetch(`https://aulth-panda.herokuapp.com/api/article/${url}`)
  let data = await response.json();
  return {
    props: {
      blog : data
    }
  }
}
export default Slug