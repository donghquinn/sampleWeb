import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ThemeSubscribe() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "300%" }}>
        THEME 구독권
      </h1>
      <p style={{ textAlign: "center" }}>사랑하는 당신의 가족을 위한 구독권</p>
      <p style={{ textAlign: "center" }}>
        사랑하는 우리 아이의 안전이 걱정되시나요?
      </p>
      <p style={{ textAlign: "center" }}>
        연로하신 부모님께서 안전하게 이동하실 수 있는 교통 수단이 고민이신가요?
      </p>
      <div className="flex flex-col content-center"></div>
      <div className="flex justify-center "></div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>구독권 종류</p>
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
  );
}

export default ThemeSubscribe;
