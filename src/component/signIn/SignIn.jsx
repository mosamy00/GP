import React from 'react'
import img from '../../assites/a1c7dc5b68a42239311e510f54d8cd59.jpeg'
export default function SignIn() {
  return <>
  
  <div className="container-fluid py-5">
  <div className="row">
    <div className="col-md-7">
      <img className='w-100' src={img} alt="" />
    </div>
    <div className="col-md-4 py-5 px-5 d-flex align-items-center justify-content-center">
      <div className='px-5'>
        <h2 >Log in to Exclusive</h2>
        <h3 className='fs-6'>Enter your details below</h3>
        <form className='py-3' >
          
          <input className='form-control form border-bottom border-2 border-dark my-4' type="email" name="Email" id="Email" placeholder="Email or Phone Number" />
          <input className='form-control form border-bottom border-2 border-dark my-4' type="password" name="password" id="password" placeholder="Password" />
        
       <div className=''>
       <button className='btn btn-danger me-auto   my-3'>log in</button>
        <button className='btn ms-auto px-5 '>Forget Password?</button>
       </div>
        </form>
      </div>
    </div>
  </div>
</div>
  </>
}
