import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Login() {
  

  return(
    <div>
      <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">이메일</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">패스워드</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
              <Link href="/signup" className="label-text-alt link link-hover">회원가입</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <Link href='/subscribe'>
             <button className="btn btn-primary" style={{backgroundColor: '#885EA'}} 
            //  onClick={
            //  () => {
            //   useEffect(async () => {
            //     try {
            //       const result = await 
            //     } catch (error) {
            //       throw new Error('[Error!]')
            //     }
            //  })
            //   }}
              >로그인</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login;