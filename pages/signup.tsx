import axios from 'axios';
import Link from 'next/link';
import React from 'react';

function Signup() {
  const loignRequest = async (name: string, email: string, passwd: string) => {
    const response = axios.post('https://dback.andonhg.com/v1/signup', {
    name,
    email,
    passwd,
    });
  }

  return (
    <div>

    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">이름</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>        
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
          <input type="text" placeholder="passwd" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <Link href='/login'>
           <button className="btn btn-primary" style={{backgroundColor: '#885EA'}} 
           >회원가입하기</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Signup;