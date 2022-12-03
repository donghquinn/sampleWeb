import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function Preparing() {
  return (
    <div>
      <div className="flex flex-col content-center">
        <div className="flex justify-center">
          <h1 style={{ textAlign: "center", fontWeight: "bold", margin: 50 }}>
            어플리케이션은 현재 준비중입니다!
          </h1>
        </div>
      </div>
      <div className="flex flex-col content-center">
        <div className="flex justify-center">
          <p>대신 또타가 준비중인 어플리케이션을 살짝 구경시켜드릴게요</p>
        </div>
      </div>
      <div className="grid grid-flow-row content-center">
        <div className="flex flex-auto justify-center"> </div>
        <Link href="/application">
          <Button>구경하러 가기</Button>
        </Link>
      </div>
    </div>
  );
}

export default Preparing;
