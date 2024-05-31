import React from 'react'

// components
import Container from './shared/Container'
import { FlexRow } from './shared/Flex'

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <a className='border border-slate-400 rounded w-64 pl-2 text-xl hover:bg-slate-400 transition' href={href}>{children}</a>
    )
}

const Nav = () => {
    return (
        <div className='pb-2'>
            <FlexRow className='gap-2'>
                <NavLink href='/time'>TIME</NavLink>
                <NavLink href='/relationships'>RELATIONSHIPS</NavLink>
                <NavLink href='/distributions'>DISTRIBUTIONS</NavLink>
                <NavLink href='/aggregate'>AGGREGATE</NavLink>
                <NavLink href='/individuals'>INDIVIDUALS</NavLink>
            </FlexRow>
        </div>
    )
}

export default Nav