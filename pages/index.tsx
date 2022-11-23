import { url } from 'inspector';
import Link from 'next/link';
// import style from  '../styles/module.css'

// style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent:"center"}}
function Home() {
  
  return (
    <div className="hero min-h-screen bg-base-200" style={{ backgroundColor: '#7665ff'}}>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold" style={{color: 'white'}}>또타</h1>
      <p className="py-6"  style={{font: 'bold', color: "white"}}>당신에게 맞는 편리한 맞춤형 택시 구독 서비스</p>
      <Link href='/subscribe'><button className="btn btn-primary">구독하러 가기</button></Link>
    </div>
  </div>
</div>

    // <div>
    //   <div className="hero min-h-screen" style={{ backgroundImage: `url(/img/logo.png)`}} >
    //     <div className="hero-overlay"></div>
    //     <div className="hero-content text-center text-neutral-content ">
    //       <div className="max-w-md">
    //         <h1 className="mb-5 text-5xl font-bold">또타</h1>
    //         <p className="mb-5"></p>
    //         <Link href='/subscribe'><button className="btn btn-primary">구독하기</button></Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home 