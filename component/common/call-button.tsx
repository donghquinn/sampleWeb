import Link from "next/link";
import React from "react";

function CallButton() {
  return (
    <div>
      <Link href='/'>
        <button className="btn call" >호출</button>
      </Link>
    </div>
  )
}

export default CallButton;