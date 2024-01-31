import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className? : string}) => {
    return (
        <div className={`p-2 m-2 ${className}`}>{children}</div>
    )
}

export default Container