import React, { useState } from 'react'
import Head from 'next/head';
const Create = () => {
    const [article, setArticle] = useState({ title: '', content: '', url: '', description: '', image: '', author: '' })
    const date = new Date();
    const handleOnChange = (e) => {
        e.preventDefault()
        setArticle({ ...article, [e.target.name]: e.target.value })
        if (e.target.name === 'title') {
            setArticle({ ...article, title: e.target.value, url: e.target.value.replace(/\s+/g, '-').toLowerCase() })
        }
        console.log(article)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (!article.title || !article.content || !article.url || !article.description || !article.image || !article.author) {
            alert('Please fill all the fields')
        } else {
            const response = await fetch('/api/postarticle', {
                method: 'POST',
                body: JSON.stringify(article)
            })
            const data = await response.json()
            console.log(data)
            if (data.success) {
                alert('Article created successfully')
            } else {
                alert('Something went wrong')
            }
        }

    }
    return (
        <>
        <Head>
        <title>Create article</title>
        <link rel="icon" href="/create.ico" />
        <meta name="description" content="Publish your own article to mypanda.vercel.app" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Blog, Nextjs, create, post, article, author, blogging" />
      </Head>
            <div className="w-full border-box flex flex-col create-pg items-center">
                <h1 className="text-2xl font-bold pt-5">Create a new blog post</h1>
                <form className="w-full flex flex-col items-center p-5 text-white" onSubmit={handleOnSubmit}>
                    <input className="w-full border-b border-gray-300 p-2 create-input" type="text" name="title" onChange={handleOnChange} placeholder="Title" />
                    <input className="w-full border-b border-gray-300 p-2 create-input" type="text" name="author" onChange={handleOnChange} placeholder="Author" />
                    <input className="w-full border-b border-gray-300 p-2 create-input" type="text" name="url" onChange={handleOnChange} value={article.url} placeholder="Url" />
                    <input className="w-full border-b border-gray-300 p-2 create-input" type="text" name="image" onChange={handleOnChange} placeholder="Image-Link" />
                    <textarea className="w-full border-b border-gray-300 p-2 mt-2" name="description" onChange={handleOnChange} placeholder="Description"></textarea>
                    <textarea className="w-full border-b border-gray-300 p-2 my-2" name="content" onChange={handleOnChange} placeholder="Content"></textarea>
                    <input className="w-full border-b border-gray-300 p-2 bg-gray-800 cursor-pointer hover:bg-gray-700" type="submit" value='Post' />
                </form>
            </div>
        </>
    )
}

export default Create