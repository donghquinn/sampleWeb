import Link from 'next/link';
import React from 'react'

function LoginButton() {
  return (
    <div>
      <Link href="/login">
    <button className="center-bottom btn btn-ghost">회원가입</button>
    </Link>
    <div>
       
      </div>
    </div>
  )
}

export default LoginButton;