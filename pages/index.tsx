import { url } from 'inspector';
import Link from 'next/link';
// import style from  '../styles/module.css'

// style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent:"center"}}
function Home() {
  
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(/img/logo.png)`}} >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">또타</h1>
            <p className="mb-5"></p>
            <Link href='/subscribe'><button className="btn btn-primary">구독하기</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 