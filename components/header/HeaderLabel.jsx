import React from 'react'
import Link from 'next/link'

const HeaderLabel = ({ link, text }) => {
    return (
        <div className='basis-1/5'>
            <h2>
                <Link href={link}>
                    {text}
                </Link>
            </h2>
        </div>
    )
}

export default HeaderLabel
