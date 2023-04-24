
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [input,setinput]=useState({})
  const navigate=useNavigate()
  const changeMyData=(e)=>{
    setinput({
       ...input,[e.target.name]:e.target.value
    })
}
const clickLogin=()=>{
  axios.post("http://localhost:3000/login",input)
  .then(response=>{
    console.log(response.data.msg)
    // console.log(response.data.msg)
    if (response.data.msg==="login successful") {
      navigate("/Home")
    } else if(response.data.msg==="User not found"){
      alert("user not found")
    }else if(response.data.msg==="An error occured"){
      alert("error")

    }
    else {
      alert("invalid credentials")
      
      
    }
    // setinput(response.data)
  })
  
}
  return (
    <div className="container">
       
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" name="username"onChange={changeMyData}  className="form-control" />

            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" name="password" onChange={changeMyData}   className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={clickLogin} >Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login