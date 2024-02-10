import React from 'react'

export const Flex = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>{children}</div>
    )
}

export const FlexRow = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-row flex-wrap'>{children}</div>
    )
}

export const FlexCol = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col'>{children}</div>
    )
}

const components = {
    Flex,
    FlexRow,
    FlexCol
}

export default components