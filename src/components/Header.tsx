import React from 'react'

// components
import Container from './shared/Container'
import Title from './Title'
import Nav from './Nav'

const Header = () => {
    return (
        <header className='bg-slate-300 p-6'>
            <section >
                <Title />
                <Nav />
            </section>
        </header>
    )
}

export default Header
