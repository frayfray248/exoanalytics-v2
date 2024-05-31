import React from 'react'

// components
import Header from '../Header'
import Footer from '../Footer'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className='flex-1 min-h-0'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PageLayout