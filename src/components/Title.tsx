import React from 'react'

// components
import Container from './shared/Container'
import { FlexCol, FlexRow } from './shared/Flex'

const Title = () => {
    return (
        <Container>
            <FlexCol>
                <h1 className='relative title-side-block bg-gray-100 w-56 p-1 m-1 text-center'>Exoanalytics</h1>
                <h2 className=' bg-black p-1 m-1 w-56 text-center text-white'>Exoplanet Data Visualizer</h2>

            </FlexCol>
        </Container>
    )
}

export default Title