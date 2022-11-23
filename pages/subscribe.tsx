/* eslint-disable react/jsx-no-undef */
import Link from 'next/link';

function Subscribe() {
  return(
    <div>

      <div>
      <h1 style={{textAlign: 'center', fontWeight: "bold", fontSize: "300%"}}>정기권 구독</h1>
        <p style={{textAlign: "center"}}>저희가 제공하는 구독은 두가지로 나뉩니다.</p>
        <p style={{textAlign: 'center'}}><span style={{fontWeight: 'bold'}}>FAST 구독권:</span> 바쁜 학생들과 직장인을 위한 구독권</p>
        <p style={{textAlign: 'center'}}><span style={{fontWeight: 'bold'}}>THEME 구독권:</span> 사랑하는 당신의 가족을 위한 구독권</p>
        <p></p>
      </div>
      <div className='subscribe-theme'>
        <Link href='/theme-sub'>
          <button className='btn btn-primary' >바쁜 학생들과 직장인을 위한 구독</button>
        </Link>
      </div>

      <div className='subscribe-univ'>
        <Link href='/unive-sub'>
          <button className='btn btn-primary' >사랑하는 당신의 가족을 위한 구독</button>
        </Link>
      </div>
    </div>
  )
}

export default Subscribe;
