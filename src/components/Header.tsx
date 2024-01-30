import React from 'react'

// components
import Container from './shared/Container'
import { FlexCol, FlexRow } from './shared/Flex'

const Header = () => {
    return (
        <Container>
            <Container>
                <FlexCol>
                    <h1>Exoanalytics</h1>
                    <h2>Exoplanet Data Visualizer</h2>
                </FlexCol>
            </Container>
            <Container>
                <FlexRow>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                </FlexRow>
            </Container>
        </Container>
    )
}

export default Header
