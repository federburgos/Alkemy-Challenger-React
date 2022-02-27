import {useState, useEffect} from 'react'
import {Button} from "react-bootstrap"
import BasicLayout from "../layouts/BasicLayout"
import BasicModal from "../components/Modal/BasicModal"
import Blog from "../components/Blog"

import LoginForm from '../components/Auth/LoginForm/LoginForm'
import useAuth from "../hooks/useAuth"



export default function Home() {

  const [modalShow, setModalShow] = useState(true);

  const {auth, logout} = useAuth();
 
 // const onCloseModal = () => setshowModal(false)
  return (
  
      <BasicLayout menuColor="#000">
        
    {!auth ? (
                         <BasicModal
                         show={modalShow}
                         onHide={() => setModalShow(false)}
                       />
              )  :
               (    <div className="conte">
                
                                  <Blog />                  
                     </div> 
               )}

      </BasicLayout>
  )
}


 