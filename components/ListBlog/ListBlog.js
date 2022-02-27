import React, {useState} from 'react'
import {map} from "lodash"
import Link from "next/link"
import useWindowSize from "../../hooks/useWindowSize"
import {breakpointUpLg, breakpointUpMd, breakpointUpSm} from "../../utils/breakpoint"
import { Container, Row, Col, Card, Button , ButtonGroup} from "react-bootstrap"
import DetalleModal from '../Modal/DetalleModal/DetalleModal'
import {EliminarMenuId} from "../../api/blog"
import {toast} from "react-toastify"
import {useRouter} from "next/router"





export default function ListBlog({blogs}) {

    const {width} = useWindowSize();
 
  

    return (
<div>
        <Container className="proyects">
        <h1 className='menus'>MENUS</h1>
         
        <Row>
          {blogs.map((proyect, index) => (
            <Col key={index} xs={12} sm={6} className="proyect">
                <Info proyect={proyect}/>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    )
}



function Info({proyect}) {

  const [modalShow, setModalShow] = useState(false);
  const router = useRouter()

  const Eliminar = (id) => {
    EliminarMenuId(id)
    toast.info(` Se elimino el menu N° ${id}`)
    console.log(id)
 
  }

 
  
    return (
        <>
        <Card  className='card'>
                <Card.Body>
                  <Card.Title>{proyect.title}</Card.Title>
                  <img src="https://www.pequerecetas.com/wp-content/uploads/2021/03/comidas-rapidas.jpg" alt="comida" className='comida'/>
                  <DetalleModal
                   show={modalShow}
                  onHide={() => setModalShow(false)}
                  id = {proyect.id}
                 />
                
                        <div className="actions">

                        <ButtonGroup aria-label="Basic example"  className="mb-2">
                            <Button className="boton" variant="outline-primary" className="outline" onClick={() => setModalShow(true)}>Detalles</Button>
                            <Button  className="boton" variant="outline-secondary" onClick={() => router.push(`/editar?query=${proyect.id}`)}>Editar Menu</Button>
                            <Button  className="boton" variant="outline-danger" onClick={() => Eliminar(proyect.id)}>Eliminar</Button>
                        </ButtonGroup>
        
                    </div>
                </Card.Body>
              </Card>
        
    </>
    )
    
  }
  