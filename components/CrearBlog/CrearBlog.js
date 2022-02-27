import React, {useState} from 'react'
import {Button, Form} from "react-bootstrap"
//import {Form, Button} from "semantic-ui-react"
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {toast} from "react-toastify"
import useAuth from "../../hooks/useAuth"
import {crearBlog} from "../../api/blog"
import {useRouter} from "next/router"






export default function CrearBlog({logout}) {

    const router = useRouter()
   

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            const response = await crearBlog(formData)
            toast.info("Menu Creado")
            console.log(response)
            router.push("/")
           
        }
     
    })

    return (
        <div className="change-name-form">
            <h4>Ingresa el nombre del menu y sus ingredientes:</h4>

            <Form onSubmit={formik.handleSubmit}>
                
                    <Form.Control  name="name"  placeholder="Nombre" 
                    onChange={formik.handleChange} value={formik.values.name}
                    isInvalid= {!!formik.errors.name}  
                    />

                    <Form.Control  name="lastname"  placeholder="Ingredientes" 
                    onChange={formik.handleChange} value={formik.values.lastname}
                    isInvalid= {!!formik.errors.lastname}    
                    />


                {formik.errors.name&& ( <div className = "mensaje">{formik.errors.name} </div>)}
        
                    {formik.errors.lastname && (  <div className = "mensaje"> {formik.errors.lastname}</div> )}
               
               <div>
                   <Button className="submit" type="submit" >Enviar</Button>
               </div>
             
            </Form>
            
        </div>
    )
}

function initialValues(name, lastname) {

    return {
        name: "",
        lastname: ""
    }
    
}

function validationSchema() {
    return {
        name: Yup.string().required("El nombre es obligatorio"),
        lastname: Yup.string().required("Los ingredientes son obligatorio")
    }
}