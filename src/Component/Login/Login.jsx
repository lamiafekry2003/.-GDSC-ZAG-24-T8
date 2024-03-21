
import React, { useContext, useEffect, useRef, useState } from "react";
// import Home from "./Home";
import style from "../Register/Register.module.css"
import { useFormik } from 'formik'
import * as Yap from 'yup'
import UserContext from '../../UserContext'
import { useNavigate } from 'react-router-dom'
export default function Login() {
     const navigate =useNavigate()
    // // const {user,setUser}=useContext(UserContext)
    //  function getLog(values){
    //     localStorage.setItem('login',JSON.stringify(values))
    //     navigate('/')
    // }
    
    // const validationSchema = Yap.object({
    //     name: Yap.string()
    //     .required("Name required")
    //     .min(2, "too small name")
    //     .max(10, "too long name "),
    //     password: Yap.string()
    //       .required("Password required")
    //       .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
    //   });
    // let formik =useFormik({
    //     initialValues:{
    //         username:'',
    //         password:'',
    //     },
    //     validationSchema,
    //     onSubmit:getLog
    // })
    const name=useRef()
    const password=useRef()
     const [showHome,setShowHome]=useState(false)
    // const [show,setShow]=useState(false)
    // const {showHome,setShowHome}=useContext(UserContext)
     const localSignUp=localStorage.getItem("signUp")
     const localPassword=localStorage.getItem("password")
     const localName=localStorage.getItem("name")
    useEffect(()=>{
     if(localSignUp){
         setShowHome(true)
     }
    })
    const handleClick=()=>{
        if(name.current.value&&password.current.value)
       {
         localStorage.setItem("name",name.current.value)
         localStorage.setItem("password",password.current.value)
        //  localStorage.setItem("signUp",email.current.value)
         alert("Account created successfully!!")
         navigate('/')
         window.location.reload()
       }
    }
 
    const handleSignIn=()=>{
     if(name.current.value==localName&&password.current.value==localPassword){
        //  localStorage.setItem("signUp",email.current.value)
         window.location.reload()
     }else{
         alert("Please Enter valid Credential")
     }
    }
  return (
    <>
     <div className='container'>
        <div className="row mt-5 pt-5" >
            <div className="col-md-12 ">
              <form action="" className=' mx-auto my-5 p-2' >
              <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center text-light">Login Now :</h4>
              <label htmlFor="username" className='d-block text-light'>Name :</label>
            <input
              type="text"
              name="username"
              id="username"
              ref={name}
              className="form-control mb-3"
            />
            <label htmlFor="password" className='d-block text-light'>password :</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={password}
              className="form-control mb-3"
            />
             <button type="submit" onClick={handleClick} className={` ${style.but} btn text-white mx-auto d-block`}>
                Login
             </button>
              </form>
            </div>
        </div>
     </div>
     </>
  )
}
