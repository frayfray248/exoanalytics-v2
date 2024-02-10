import React from 'react'

// components
import Header  from '../Header'
import Footer from '../Footer'

const PageLayout = ({ children } : { children : React.ReactNode} ) => {
  return (
    <div className='flex flex-col h-full'>
        <Header />
        <div className='border flex-1 min-h-0'>{children}</div>
        <Footer />
    </div>
  )
}

export default PageLayout