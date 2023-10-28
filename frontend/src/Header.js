import React from 'react'
import SearchBar from './SearchBar'

function Header() {
    return (
        <div className='w-full flex justify-end pr-24 pt-4'>
            <SearchBar />
        </div>

    )
}

export default Header