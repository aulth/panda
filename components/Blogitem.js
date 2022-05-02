import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Blogitem = (props) => {
    const {title, url, image, description} = props;
    return (
        <>
            <li className='my-1 rounded border border-gray-400 hover:border-gray-200 cursor-pointer'>
                <Link href={`/blogpost/${url}`}>
                    <div className="flex">
                        <img src={`${image}`} className='rounded-l' width={100} height={80} />
                        <div className="w-full p-1 pl-2">
                            <h3 className="text-lg font-semibold">
                                {title}
                            </h3>
                            <p>{description?description.slice(0,80)+'...':''}</p>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Blogitem