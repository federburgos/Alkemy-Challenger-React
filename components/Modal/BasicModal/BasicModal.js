import React from 'react'
import {Modal, Button} from "react-bootstrap"
import LoginForm from '../../Auth/LoginForm/LoginForm'



export default function BasicModal(props) {
        const { onHide} = props
    return (
      <Modal className="basic-modal"     backdrop= 'static'   keyboard = {false}
    
      {...props}
      size="fullscreen"
      centered
     
     
    >
      <Modal.Header  className="header">
        <Modal.Title>
           <span>Iniciar sesión</span>   
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='body'>
       <LoginForm onHide={onHide} />
      </Modal.Body>
    </Modal>
    )
}
 