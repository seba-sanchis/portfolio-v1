import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Container, Main } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <Main children={children} /> 
     <Footer/>
    </Container>
  )
}
