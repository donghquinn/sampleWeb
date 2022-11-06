import Link from 'next/link';
import React from 'react';
import NavBar from "../component/common/NavBar";

function Login() {
  return(
    <div>
      <NavBar></NavBar>
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
              <a href="#" className="label-text-alt link link-hover">비밀번호 찾기</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <Link href='/subscribe'>
             <button className="btn btn-primary" style={{backgroundColor: '#885EA'}}>로그인</button>
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