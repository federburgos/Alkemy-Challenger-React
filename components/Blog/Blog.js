import React, {useState, useEffect} from 'react'
import useAuth from "../../hooks/useAuth"
import {getToken} from '../../api/token'
import {useRouter} from "next/router"
import {getBlog} from "../../api/blog"
import { size } from 'lodash'
import ListBlog from '../ListBlog/ListBlog'


export default function Blog() {

    const token = getToken()
    const [blogs, SetBlogs] = useState(null)
    const {logout} = useAuth();
    const router = useRouter()

    useEffect(() => {
        (async () => {
                const response = await getBlog(logout)
             
                 if(size(response) > 0) {
                    SetBlogs(response)
                } else {
                    SetBlogs([])
                }
        })()
      }, [])
      

    return (
        <>
        {!blogs && <h2>Buscando Menus...</h2>}
        {blogs && size(blogs) === 0 && (
               <div><h3>No se ha encontrado ningun menu...</h3></div>
           )}
           {size(blogs) > 0 && <ListBlog blogs={blogs}/>}

           </>
    )
}


// <ListBlog heroes={heroes} />