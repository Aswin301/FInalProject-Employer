import React, { useEffect, useState } from 'react'
import Header from './header'
import axios from 'axios'
const Newjobpost = () => {
    const [input,setinput]=useState({})
    const changeMyData=(e)=>{
      setinput({
         ...input,[e.target.name]:e.target.value
      })
  }
    const post=()=>{
        axios.post("http://localhost:3000/newjobpost",input)
  .then(response=>{
    console.log(input)
    alert("Job posted")
  })}
  return (
    <div className="container">
    <Header/>
  <div className="row g-3">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Company</label>
          <input type="text" onChange={changeMyData} name="company"className="form-control" />

      </div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Role</label>
          <input type="text" onChange={changeMyData} name="role" className="form-control" />
      </div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Experience</label>
          <input type="number" onChange={changeMyData} name="experience" className="form-control" />
      </div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <label htmlFor="" className="form-label">Salary</label>
          <input type="number" onChange={changeMyData} name="salary" className="form-control" />
      </div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Technology</label>
          <input type="text" onChange={changeMyData} name="technology" className="form-control" />
  </div>
  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Other criteria</label>
          <input type="text" onChange={changeMyData} name="othercriteria" className="form-control" />
    
  </div>
  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button  className="btn btn-success" onClick={post}>Submit</button>
            </div>
</div>
</div>
  )
}




export default Newjobpost