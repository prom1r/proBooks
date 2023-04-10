import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-row justify-between bg-green bg-cyan-400 text-2xl items-center p-4'>
            <div className='basis-1/5'>
                <h2>
                    <Link href='/'>PROBooks</Link>
                </h2>
            </div>

            <div className='basis-1/4'>
                <ul className='flex flex-row justify-left'>
                    <li className='ml-2 mr-2 cursor-pointer hover:underline'>Home</li>
                    <li className='ml-2 mr-2 cursor-pointer hover:underline'>Categories</li>
                    <li className='ml-2 mr-2 cursor-pointer hover:underline'>Authors</li>
                </ul>
            </div>

            <div className='basis-1/2 text-right'>
                <input className='border py-2 px-3' placeholder='Search' />
            </div>
        </div>
    )
}

export default Header