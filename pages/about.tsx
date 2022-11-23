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
      <p style={{textAlign: 'center'}}>또타는 고객 맞춤형 택시 구독 서비스입니다.</p>
      <p style={{textAlign: 'center'}}>여러분의 성향과 취향에 맞는 택시를 사용하세요.</p>
      <p style={{textAlign: 'center'}}>구독권 결제를 통해 더 저렴한 가격으로 택시를 사용할 수 있습니다.</p>
      <p style={{textAlign: 'center'}}>기사님들도 안정적인 수익과 고객 확보하실 수 있습니다.</p>
      </div>
      <div className='divider'></div>
      <div>
      <p style={{textAlign: 'center', fontWeight: "bold", fontSize: '140%'}}>이용자 여러분!</p>
      <p style={{textAlign: 'center'}}>택시를 자주 타야 하는데 그 비용이 부담스러우셨나요?</p>
      <p style={{textAlign: 'center'}}>사랑스러운 우리 아이와 함께 택시를 타야 해서 걱정이 많으신가요?</p>
      <p style={{textAlign: 'center'}}>반려견과 함께 외출을 나왔는데 기사님이 승차를 거부하신 경험이 있으신가요?</p>
      <p style={{textAlign: 'center'}}>구독권 결제를 통해 원하는 시간에 저렴한 가격에 택시를 이용할 수 있습니다.</p>
      <p style={{textAlign: 'center'}}>우리 가족을 위한 맞춤형 테마 택시를 사용하실 수 있습니다.</p>
    <div> </div>
      <p style={{textAlign: 'center', fontWeight: "bold", fontSize: '140%'}}>기사님!</p>
      <p style={{textAlign: 'center'}}>어제 탑승한 승객분이 기사님의 단골 손님이 되셨습니다!</p>
      <p style={{textAlign: 'center'}}>기사님의 택시를 탑승하고자 하는 이용자가 많으셔서 이번 달 정산 금액이 상당하시네요!</p>
      <p style={{textAlign: 'center'}}>이처럼 구독 서비스를 통해 이용객의 수를 늘려 고정 수익 또한 플러스가 되는 혜택을 누릴 수 있습니다.</p>
      </div>
    </div>
  )
}

export default About;