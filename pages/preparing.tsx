import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function Preparing() {
  return (
    <div>
      <div className="flex flex-col content-center">
        <div className="flex flex-row justify-center">
          <div>
            <h1 style={{ textAlign: "center" }}>
              어플리케이션은 현재 준비중입니다!
            </h1>
          </div>
          <div>
            <p>대신 또타가 준비중인 어플리케이션을 살짝 구경시켜드릴게요</p>
          </div>
          <div className="grid grid-flow-row content-center">
            <div className="flex flex-auto justify-center"> </div>
            <Link href="/preparing">
              <Button>구경하러 가기</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preparing;
