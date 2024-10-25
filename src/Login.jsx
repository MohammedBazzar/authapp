import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ""
    }, onSubmit:userLogin,
    validate:values=>{
      let errors={};
      if(values.email.length<=8){
        errors.email="Email is requierd"
      }
      if(values.password.length<=6){
        errors.password="Password is requierd"
      }
      return errors;
    }
  })

  async function userLogin() {
    const { data } = await axios.post('https://ecommerce-node4.onrender.com/auth/signin', formik.values);
    console.log(data);
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" value={formik.values.email} name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.email && formik.touched.email? <div className='text text-danger'>{formik.errors.email}</div> :null}

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" value={formik.values.password} name='password' onChange={formik.handleChange} className="form-control" onBlur={formik.handleBlur}/>
        {formik.errors.password && formik.touched.password ? <div className='text text-danger'>{formik.errors.password}</div> :null}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>


  )
}
