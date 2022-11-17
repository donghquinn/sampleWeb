import React from 'react';
import Image from 'next/image';
import mainLogo from '../public/main-logo.png'
import SubscribeButton from '../component/common/subscribe';
import LoginButton from '../component/common/login-button';
import NavBar from '../component/common/NavBar';
// import style from  '../styles/module.css'

// style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent:"center"}}
function Home() {
  
  return (
    <div>
      <div className='logo'>
        <Image src={mainLogo}></Image>
      </div>
   {/* <div className='center'> */}
  {/* </div> */}
  {/* <div className='center-bottom'> */}

  {/* </div> */}


</div>
  )
}

export default Home