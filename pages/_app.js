import "../scss/global.scss"
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import {ToastContainer} from "react-toastify";
import AuthContext from "../context/AuthContext";
import {useRouter} from "next/router"
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from "jwt-decode"
import {setToken, getToken, removeToken} from "../api/token"

function MyApp({ Component, pageProps }) {

   const [auth, setAuth] = useState(undefined)
   const [reloadUser, setReloadUser] = useState(false)

   const router = useRouter()

   useEffect(() => {
      const token = getToken()
      if(token) {
        setAuth({
          token,
          idUser: jwtDecode(token).email
        })
       } else {
         setAuth(null)
       }
       setReloadUser(false)
      }, [reloadUser])


      
  const login = (token) => {
   setToken(token)
  setAuth({
     token,
    idUser: jwtDecode(token).email
   })
 }

 const logout = () => {
   if(auth) {
     removeToken()
     setAuth(null)
     router.push("/")
   }
 }


  const authData = useMemo(
    () => ({
       auth,
       login,
       logout,
       setReloadUser,
    }),
     [auth]
    )
return (
      <AuthContext.Provider value={authData}>
            
         <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
      <Component {...pageProps} />
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover         
      />
   </AuthContext.Provider>
);
}
export default MyApp;


