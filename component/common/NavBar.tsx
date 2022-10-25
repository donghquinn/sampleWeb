import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
  <Link  href='/'>
    <a className="btn btn-ghost normal-case text-xl">
      또타</a>
      </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>회사 소개
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </a>
        <ul className="p-2 bg-base-100">
          <li><Link href='/about'>
            <a >또타란?</a>
            </Link> </li>
          
          <li><a>목표</a></li>
          <li><a>직원 소개</a></li>
        </ul>
      </li>
      <li tabIndex={0}>
        <a>
          구독하기
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>
        <Link href='/login'>Login</Link>
      </a></li>
    </ul>
  </div>
</div>
  )
}

export default NavBar;