import React from 'react'
import HeaderLabel from './header/HeaderLabel'
import HeaderNavigation from './header/HeaderNavigation'
import HeaderSearchBar from './header/HeaderSearchBar'

const Header = () => {
    return (
        <div className='flex flex-row justify-between bg-cyan-200 text-2xl items-center p-4'>
            <HeaderLabel text={'proBooks'} link={'/'} />
            <HeaderNavigation />
            <HeaderSearchBar placeholder={'Search'} />
        </div>
    )
}

export default Header
