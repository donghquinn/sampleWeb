import React from 'react';
import Footer from '../component/common/Footer';
import NavBar from '../component/common/NavBar';

function About() {
  return (
    <div>
      <div>
        <h1 className='about-title'>또타란?</h1>
      </div>
      <div>
      고객 맞춤형으로 원하는 시간대에 미리 예약해서 이용할 수 있고
구독권 결제를 통해 조금 더 저렴한 가격에 택시를 이용할 수 있습니다.
택시 기사님에게는 이용객의 수를 늘려 고정 수익 또한 플러스가 되는 혜택을 누릴 수 있습니다
      </div>
      <div className='divider'></div>
      <div>
      <p>
      사용자 : 고객 맞춤형으로 원하는 시간대에 미리 예약해서 이용할 수 있으며
      구독권 결제를 통해 저렴한 가격에 택시를 이용할 수 있습니다.
      </p>

      <p>
      기사님 : 구독 서비스를 통해 이용객의 수를 늘려 고정 수익 또한 플러스가 되는 혜택을 누릴 수 있습니다.
      </p>
      </div>
    </div>

  )
}

export default About;