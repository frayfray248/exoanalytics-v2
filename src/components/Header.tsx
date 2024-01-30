import React from 'react'

// components
import Container from './shared/Container'
import Title from './Title'
import Nav from './Nav'

const Header = () => {
    return (
        <Container>
            <Title />
            <Nav />
        </Container>
    )
}

export default Header
