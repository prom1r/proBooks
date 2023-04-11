import React from 'react'

const HeaderSearchBar = ({ placeholder }) => {
    return (
        <div className='basis-1/2 text-right'>
            <input className='border py-2 px-3' placeholder={placeholder} />
        </div>
    )
}

export default HeaderSearchBar
