import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='p-2 m-2'>{children}</div>
    )
}

export default Container