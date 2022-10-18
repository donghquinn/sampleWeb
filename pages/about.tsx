import React from 'react';
import Footer from '../component/common/Footer';
import NavBar from '../component/common/NavBar';

function About() {

  return (
    <div className='container mx-auto'>
      <NavBar></NavBar>
      <h1 className='prose'>또타 서비스에 관하여</h1>

      <article className='prose'>또타란?
        <p>또타는 정기 택시 구독 서비스입니다. "또 타지 않을래?" 라는 의미를 담고 있습니다.</p>
        <p></p>
        </article>

      <article className='prose'>또타의 취지
        <p>대중 교통을 이용하기에 시간적으로 여유도 없고 이동중에는 편하게 쉬고 싶고.
        하지만 택시비가 부담되어 사람들에 치여 가셨나요
        택시는 잡기 힘들고, 가야할 길은 멀고.
        내가 원할 타이밍에 안정적으로 택시를 잡을 수 있으면 좋겠다고 생각하셨나요.
        또타는 사용자에게는 안정적인 택시 호출과 비용 절감을 위한 택시 정기 구독 서비스 입니다.</p>
        </article>
      <Footer></Footer>
    </div>
  )
}

export default About;