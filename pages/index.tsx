import React from 'react';
import Image from 'next/image';
import mainLogo from '../public/main-logo.png'
import SubscribeButton from '../component/common/subscribe';
import LoginButton from '../component/common/login-button';
// import style from  '../styles/module.css'

// style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent:"center"}}
function Home() {
  
  return (
<div className="artboard phone-3 phone-1" style={{backgroundColor: '#7665ff' }}>
      
      <div className='logo'>
        <Image src={mainLogo}></Image>
      </div>

    <SubscribeButton></SubscribeButton>
    <LoginButton></LoginButton>
   {/* <div className='center'> */}
     
  {/* </div> */}
  {/* <div className='center-bottom'> */}

  {/* </div> */}


</div>
  )
}

export default Home