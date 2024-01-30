import React from 'react'

export const Flex = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>{children}</div>
    )
}

export const FlexRow = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-row'>{children}</div>
    )
}

export const FlexCol = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col'>{children}</div>
    )
}

export default {
    Flex,
    FlexRow,
    FlexCol
}
