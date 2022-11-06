import Link from "next/link";
import React from "react";

function CallButton() {
  return (
    <div>
      <Link href='/driver'>
        <button className="center btn call">호출</button>
      </Link>
    </div>
  )
}

export default CallButton;