import React from 'react'

// components
import Container from './shared/Container'
import { FlexCol, FlexRow } from './shared/Flex'

const Title = () => {
    return (
        <div className='pb-6'>
            <h1 className='relative title-side-block bg-gray-100 mb-2 text-center max-w-xl text-2xl'>EXOANALYTICS</h1>
            <h2 className=' bg-black text-center text-white mb-2 px-6 max-w-xl text-xl'>EXOPLANET DATA VISUALIZER</h2>
        </div>
    )
}

export default Title