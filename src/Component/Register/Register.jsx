import React from 'react'
import style from "../Register/Register.module.css"
import { useFormik } from 'formik'
import * as Yap from 'yup'
import { Link, useNavigate } from 'react-router-dom';
export default function Register() {
  const navigate=useNavigate()
  function getReg({values}){
    localStorage.setItem('name',JSON.stringify({values}));
   
    
    navigate('/login')
   } 
      
    const validationSchema = Yap.object({
        name: Yap.string()
        .required("Name required")
        .min(2, "too small name")
        .max(10, "too long name "),
        password: Yap.string()
          .required("Password required")
          .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
        rePassword: Yap.string()
          .required("rePassword required")
          .oneOf([Yap.ref("password")]),
      });
    let formik =useFormik({
        initialValues:{
            username:'',
            password:'',
            rePassword:''
        },
        validationSchema,
        onSubmit:getReg
    })
    
    
  return (
    <>
     <div className='container'>
        <div className="row mt-5 pt-5" >
            <div className="col-md-12 ">
              <form action="" className=' mx-auto my-5 p-2' onSubmit={formik.handleSubmit}>
              <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center text-light">Register Now :</h4>
              <label htmlFor="username" className='d-block text-light'>Name :</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formik.values.name}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="password" className='d-block text-light'>password :</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             <label htmlFor="rePassword" className='d-block text-light'>rePassword :</label>
            <input
              type="Password"
              name="rePassword"
              id="rePassword"
              value={formik.values.rePassword}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             <button onClick={()=>getReg()} type="submit" className={` ${style.but} btn text-white mx-auto d-block`}>
                Register
             </button>
             <p>Have Account? <Link className='link' to='/login'>login</Link> </p>
              </form>
            </div>
        </div>
     </div>
     </>
  )
}
