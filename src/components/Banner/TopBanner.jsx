import React from 'react'
import "./topBanner.css"
import { Container, Row } from 'react-bootstrap'

export const TopBanner = () => {
  return (
    <>
        <Container fluid className='topFixBanner'>
            <div className='topBannerOverlay'></div>
        </Container>
    </>
  )
}
