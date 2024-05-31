import React from 'react'

export const Flex = ({ children, className="" }: { children: React.ReactNode, className? : string }) => {
    return (
        <div className={`flex ${className}`}>{children}</div>
    )
}

export const FlexRow = ({ children, className="" }: { children: React.ReactNode, className? : string }) => {
    return (
        <div className={`flex flex-row flex-wrap ${className}`}>{children}</div>
    )
}

export const FlexCol = ({ children, className="" }: { children: React.ReactNode, className? : string }) => {
    return (
        <div className={`flex flex-col ${className}`}>{children}</div>
    )
}

const components = {
    Flex,
    FlexRow,
    FlexCol
}

export default components