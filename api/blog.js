import {BASE_PATHAPI} from "../utils/constants"
import {authFetch} from "../utils/fetch"


export async function getBlog(logout) {

    try {
        const url = `${BASE_PATHAPI}`
        const result = authFetch(url, null, logout)
        return result ? result : null
        
    } catch (error) {
        console.log(error)
        return null
    }
    
}

export async function getBlogId(idUser, logout) {

    try {
        const url = `${BASE_PATHAPI}/${idUser}`
        const result = authFetch(url, null, logout)
        return result ? result : null
        
    } catch (error) {
        console.log(error)
        return null
    }
    
}

export async function EliminarMenuId(idUser, logout) {

    try {
        const url = `${BASE_PATHAPI}/${idUser}`

        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
       
        const result = await authFetch(url, params, logout)
        if(result.statusCode === 500) throw "Error del servidor"
        return true
        
    } catch (error) {
        console.log(error)
        return null
    }
    
}


export async function updateNameApi(idUser, data, logout) {
    try {
        const url = `${BASE_PATHAPI}/${idUser}`
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        } 
        const result = await authFetch(url, params, logout)
        console.log(result)
        return result 
       
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function crearBlog(formData) {
    try {
        const url = `${BASE_PATHAPI}/${idUser}`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(url, params)
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
        return null
    }
    
}