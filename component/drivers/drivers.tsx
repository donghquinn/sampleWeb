/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import picture from '../../public/people.png'

function DriverCards(props) {
  const {driverName, careerAge} = props;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><Image src={picture} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{driverName}</h2>
        <p>운전 경력: {careerAge}년</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">구독하기</button>
        </div>
      </div>
    </div>
  )
}

export default DriverCards;
