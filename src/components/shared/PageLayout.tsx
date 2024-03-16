import React from 'react'

// components
import Header  from '../Header'
import Footer from '../Footer'

const PageLayout = ({ children } : { children : React.ReactNode} ) => {
  return (
    <div className='flex flex-col h-full min-h-96'>
        <Header />
            <div className='flex-1 flex xl:flex-row flex-col'>{children}</div>
        <Footer />
    </div>
  )
}

export default PageLayout