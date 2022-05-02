import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
           <nav className="w-full flex justify-between box-border p-3 items-center text-white bg-gray-800">
               <h2 className="text-2xl text-white cursor-pointer font-bold"><Link href='/'>Panda</Link></h2>
               <ul className='flex'>
                   <li className='ml-2 hover:bg-gray-700 p-1 rounded'><Link href="/blog">Blogs</Link></li>
                   <li className='ml-2 hover:bg-gray-700 p-1 rounded'><Link href="/about">About</Link></li>
                   <li className='ml-2 hover:bg-gray-700 p-1 rounded'><Link href="/contact">Contact</Link></li>
                   <li className='ml-2 hover:bg-gray-700 p-1 rounded'><Link href="/create">Publish</Link></li>
               </ul>
           </nav>
        </>
    )
}

export default Navbar