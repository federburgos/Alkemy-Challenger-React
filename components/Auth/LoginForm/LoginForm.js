import React, {useState} from 'react'
import {Button, Form} from "react-bootstrap"
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {toast} from "react-toastify"
import useAuth from "../../../hooks/useAuth"
import { loginApi } from "../../../api/user"


export default function LoginForm({ onHide}) {

   

    const [loading, setLoading] = useState(false)

   const {login} = useAuth();
  
   

    const formik = useFormik({
        initialValues : initialValues(),
        validationSchema : Yup.object(validationSchema()),
        onSubmit: async (FormData) => {
            setLoading(true)
            const response =  await loginApi(FormData)
            if(response?.token) {
                login(response.token)
                   onHide()
            } else {
                toast.error("Error al registrar el usuario")
            }
         
            setLoading(false)

        }
        
    })


    return (
       
       <Form className="login-form" onSubmit={formik.handleSubmit}>

           <Form.Control 
                name="email"
                type="text"
                placeholder="Correro electronico"
                onChange= {formik.handleChange}
                isInvalid= {!!formik.errors.email}
           />
           
            <Form.Control 
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange= {formik.handleChange}
                isInvalid= {!!formik.errors.password}
           
           />
        
           {formik.errors.email&& ( <div className = "mensaje">{formik.errors.email} </div>)}
        
           {formik.errors.password && (  <div className = "mensaje"> {formik.errors.password}</div> )}

           <div className="actions">
              
               <div>
                   <Button className="submit" type="submit" >Enviar</Button>
               </div>
             
           </div>
           
       </Form>

       
    )
}

function initialValues() {
    return {
        email: "",
        password:""
    }
}

function validationSchema() {
    return {
        email: Yup.string().email(true).required("El correo es obligatorio"),
        password: Yup.string().required("La contraseña es obligatorio")
    }
}

