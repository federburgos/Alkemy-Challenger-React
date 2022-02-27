import React, {useState, useEffect} from 'react'
import {useRouter} from "next/router"
import useAuth from "../hooks/useAuth"
import { size } from 'lodash'
import {getBlogId} from "../api/blog"
import BasicLayout from "../layouts/BasicLayout"
import ChangeNameForm from '../components/ChangeNameForm/ChangeNameForm'

export default function editar() {

    
    const [blog, setBlog] = useState(null)
    const {query} = useRouter()
    const router = useRouter()
    const {auth, logout} = useAuth();
        
    useEffect(() => {

        if(!auth) {
          
            logout()
            router.push("/")
        } 
      }, [])

      useEffect(() => {
        (async () => {
                const response = await getBlogId(query.query ,logout)
                setBlog(response)
        })()
      }, [])
      console.log(blog)

      


    return (
        <BasicLayout menuColor="#000">

            {!blog && <h2>Buscando Menu ...</h2>}
          {blog && size(blog) === 0 && (
               <div><h3>No se ha encontrado ningun menu...</h3></div>
           )}
           {size(blog) > 0 &&   <ChangeNameForm blog={blog} logout={logout} />         }
      
        </BasicLayout>
    )
}
