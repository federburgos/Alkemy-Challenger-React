import {getToken} from '../api/token';


export async function authFetch(url, params, logout) {
    const token = getToken()

    if(!token) {
        //usuario no logeado
        logout()
    } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                }
            }
            try {
                const response = await fetch(url, paramsTemp)
                const result = await response.json()
                return result
            } catch (error) {
                return error
            }
        }
    }
    
