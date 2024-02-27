import React from 'react'

// components
import Container from './shared/Container'
import { FlexRow } from './shared/Flex'

const NavLink = ({ href, children } : { href : string, children : React.ReactNode}) => {
    return (
        <a className='border-1 px-24 mr-1 my-1 py-1 bg-gray-100' href={href}>{children}</a>
    )
}

const Nav = () => {
  return (
    <Container>
        <FlexRow>
            <NavLink href='/time'>Time</NavLink>
            <NavLink href='/relationships'>Relationships</NavLink>
            <NavLink href='/distributions'>Distributions</NavLink>
            <NavLink href='/aggregate'>Aggregate</NavLink>
            <NavLink href='/individuals'>Individuals</NavLink>
        </FlexRow>
    </Container>
  )
}

export default Nav