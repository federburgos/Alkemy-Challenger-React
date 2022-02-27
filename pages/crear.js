import React, {useState, useEffect} from 'react'
import {useRouter} from "next/router"
import useAuth from "../hooks/useAuth"
import { size } from 'lodash'
import {getBlogId} from "../api/blog"
import BasicLayout from "../layouts/BasicLayout"
import ChangeNameForm from '../components/ChangeNameForm/ChangeNameForm'
import CrearBlog from '../components/CrearBlog'

export default function crear() {

    

    const router = useRouter()
    const {auth, logout} = useAuth();
        
    useEffect(() => {

        if(!auth) {
  
            logout()
            router.push("/")
        } 
      }, [])

  
      
    return (
        <BasicLayout menuColor="#000">

       
           
            <CrearBlog logout={logout} />         
      
        </BasicLayout>
    )
}
