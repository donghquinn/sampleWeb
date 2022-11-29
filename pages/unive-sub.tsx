import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function AboutBusySub() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "300%" }}>
        FAST 구독권
      </h1>
      <p style={{ textAlign: "center" }}>바쁜 대학생 / 직장인을 위한 구독권</p>
      <p style={{ textAlign: "center" }}> 빠른 배차가 필요하신가요? </p>
      <p style={{ textAlign: "center" }}> 택시 이용 횟수가 많으신가요? </p>
      <p style={{ textAlign: "center" }}> 또타 FAST 구독권을 사용해 보세요! </p>
      <div className="flex flex-col content-center">
        <div className="flex justify-center ">
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                구독권 종류
              </p>
              <ul>
                <li style={{ textAlign: "left" }}>
                  <span style={{ fontWeight: "bold" }}>15KM:</span> 15,000 원
                </li>
                <li style={{ textAlign: "left" }}>
                  <span style={{ fontWeight: "bold" }}>30KM:</span> 29,000 원 +
                  500원 할인 쿠폰 3장
                </li>
                <li style={{ textAlign: "left" }}>
                  <span style={{ fontWeight: "bold" }}>60KM:</span> 39,000 원 +
                  500원 할인 쿠폰 6장
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutBusySub;
