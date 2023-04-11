import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderNavigation = () => {
    const router = useRouter()

    const pages = [
        { name: 'Home', link: '/' },
        { name: 'Categories', link: '/categories' },
        { name: 'Authors', link: '/authors' },
        { name: 'All Books', link: '/allBooks' }
    ]

    return (
        <div className='basis-1/4'>
            <ul className='flex flex-row justify-left'>
                {pages.map(
                    ({ name, link }, i) => (
                        <Link href={link} key={i} className={`ml-2 mr-2 cursor-pointer ${router.pathname === link ? 'underline' : ''}`}>
                            {name}
                        </Link>
                    )
                )}
            </ul>
        </div>
    )
}

export default HeaderNavigation
