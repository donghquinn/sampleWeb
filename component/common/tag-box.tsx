import React, { useEffect, useState } from 'react';

function TagBox() {
  const [firstHashtag, setFirstHashTag] = useState('');
  const [secondHashtag, setSecondHashTag] = useState('');


  return (
    <div>
      <div className='card w-96 bg-neutral text-neutral-content'>
        <h3 className='hashtag-title'> 당신의 취향을 선택해 주세요</h3>
        <button className='hashtag1' onClick={(e) => setFirstHashTag('조용한')}>#조용한</button>
        <button className='hashtag1' onClick={(e) => setSecondHashTag('친절한')}>#친절한</button>
      </div>

      <div className='card'>
        <h1 >선택한 취향</h1>
        <button className='hashtag1' onClick={(e) => setFirstHashTag('')}>{firstHashtag}</button>
        <button className='hashtag1' onClick={(e) => setSecondHashTag('')}>{secondHashtag}</button>
      </div>
    </div>
  )
}

export default TagBox;