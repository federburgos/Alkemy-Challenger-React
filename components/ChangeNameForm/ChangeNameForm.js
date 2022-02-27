import React, {useState} from 'react'
import {Button, Form} from "react-bootstrap"
//import {Form, Button} from "semantic-ui-react"
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {toast} from "react-toastify"
import useAuth from "../../hooks/useAuth"
import {updateNameApi} from "../../api/blog"
import {useRouter} from "next/router"






export default function ChangeNameForm({blog, logout}) {

    const router = useRouter()
    


    const formik = useFormik({
        initialValues: initialValues(blog.title, blog.body),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            
            const response = await updateNameApi(blog.id, formData, logout)
            toast.info("El menu fue actualizado")
            console.log(response)
            router.push("/")
           
        }
     
    })

    return (
        <div className="change-name-form">
            <h4>Cambia el nombre y contenido del menu:</h4>

            <Form onSubmit={formik.handleSubmit}>
                
                    <Form.Control  name="name"  placeholder="Tu nuevo titulo" 
                    onChange={formik.handleChange} value={formik.values.name}
                    isInvalid= {!!formik.errors.name}  
                    />

                    <Form.Control  name="lastname"  placeholder="Tu nuevo detalle" 
                    onChange={formik.handleChange} value={formik.values.lastname}
                    isInvalid= {!!formik.errors.lastname}    
                    />

                    {formik.errors.name&& ( <div className = "mensaje">{formik.errors.name} </div>)}
        
                    {formik.errors.lastname && (  <div className = "mensaje"> {formik.errors.lastname}</div> )}
               
                <Button className="submit" type="submit">Cambiar</Button>
            </Form>
            
        </div>
    )
}

function initialValues(name, lastname) {

    return {
        name: name || "",
        lastname: lastname || ""
    }
    
}

function validationSchema() {
    return {
        name: Yup.string().required("El titulo es obligatorio"),
        lastname: Yup.string().required("El detalle es obligatorio")
    }
}