/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function SubCard() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">구독하러 가요</h2>
    <p>안전하고 믿을 수 있는 또타의 기사님들을 만나요</p>
    <p>마음에 드는 기사님을 구독하고 필요할 때 언제든 택시를 이용해 보세요!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">
        <Link href='/reserve'>구독하러 가기</Link></button>
    </div>
  </div>
</div>
  )
}

export default SubCard;
