import React from 'react'

// components
import Header  from '../Header'
import Footer from '../Footer'

const PageLayout = ({ children } : { children : React.ReactNode} ) => {
  return (
    <div className='flex flex-col min-h-full '>
        <Header />
            <div className='flex-1 flex xl:flex-row flex-col min-h-96 m-16'>{children}</div>
        <Footer />
    </div>
  )
}

export default PageLayout