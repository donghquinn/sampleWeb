import Link from 'next/link';

function Subscribe() {
  return(
    <div>
      <h1 className='title'>정기권 구독</h1>
      <div className='subscribe-theme'>
        <Link href='/theme-sub'>
          <button className='btn btn-primary' >사랑하는 당신의 가족을 위한 구독</button>
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
