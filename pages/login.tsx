import NavBar from "../component/common/NavBar";

function Login() {
  return(
    <div>
      <NavBar></NavBar>
      <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">또타!</h1>
        <p className="py-6">또타와 함께 편안한 이동을 하세요! </p>
      </div>
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
            <button className="btn btn-primary">로그인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login;