import React from "react"
import Menu from "../components/Menu"
import { Container } from "react-bootstrap"


export default function BasicLayout(props) {
  const { children , menuColor} = props

  return (
    <Container fluid className="basic-layout" style={{paddingLeft:"0px"}}>
    
        <Menu menuColor={menuColor} />
        {children}
   
   
    </Container>
  )
}
