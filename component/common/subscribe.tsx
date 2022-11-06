import React from 'react';
import Link from 'next/link';

function SubscribeButton() {
  return (
    <div>
      <Link href='/subscribe'>
    <button className='center btn subscribe-button'>구독하기</button>
    </Link>
    </div>
  )
}

export default SubscribeButton;