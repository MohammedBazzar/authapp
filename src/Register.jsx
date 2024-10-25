import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: ""
    }, onSubmit:RegisterUser,
    validate:values=>{
      let errors={};
      if(values.userName.length<=3){
        errors.userName="userName is requierd"
      }
      if(values.email.length<=8){
        errors.email="Email is requierd"
      }
      if(values.password.length<=6){
        errors.email="Password is requierd"
      }
    }
  })

  async function RegisterUser() {
    const { data } = await axios.post('https://ecommerce-node4.onrender.com/auth/signup', formik.values);
    console.log(data);
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">User Name</label>
        <input type="text" className="form-control" value={formik.values.userName} name="userName" onChange={formik.handleChange} />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" value={formik.values.email} name="email" onChange={formik.handleChange} />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" value={formik.values.password} name='password' onChange={formik.handleChange} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>


  )
}
