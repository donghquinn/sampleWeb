/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

function SubCard() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">또타</h1>
        <p className="mb-5">또타와 함께 택시 구독 서비스를 이용해봐요!</p>
        <Link href='/driver'>
          <button className="btn btn-primary">택시 기사님 구독</button>
        </Link>
        <Link href='/subscribe'>
          <button className="btn btn-primary">정기권 구독</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default SubCard;
