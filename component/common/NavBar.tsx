
import mainLogo from '../../public/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png'

function NavBar() {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href='/'>
      <Image src={mainLogo} height={60} width={60}></Image>
      </Link>
    </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
       <li><Link href='/about'><a>회사소개</a></Link></li>
      <li tabIndex={0}>
        <a>
          구독권
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>대학생을 위한 구독권</a></li>
          <li><a>맞춤형 테마 구독권</a></li>
        </ul>
      </li>
      <li><Link href='/login'><a>로그인/회원가입</a></Link></li>
    </ul>
  </div>
</div>
  )
}

export default NavBar;