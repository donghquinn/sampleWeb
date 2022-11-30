import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import dog from "../../public/img/dog.png";
import Image from "next/image";
import family from "../../public/img/family.jpeg";

function ThemeSubscribe() {
  return (
    <div className="flex flex-row justify-start">
      <Card sx={{ maxWidth: 1000 }}>
        <CardContent>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "300%",
            }}
          >
            THEME 구독권
          </h1>
          <Image src={family} alt="family" height={300} width={300}></Image>
          <p style={{ textAlign: "left" }}>
            사랑하는 당신의 <span style={{ fontWeight: "bold" }}>가족</span>을
            위한 구독권
          </p>
          <p style={{ textAlign: "left" }}>
            사랑하는 우리 <span style={{ fontWeight: "bold" }}>아이</span>의
            안전이 걱정되시나요?
          </p>
          <p style={{ textAlign: "left" }}>
            연로하신 <span style={{ fontWeight: "bold" }}>부모님</span>께서
            안전하게 이동하실 수 있는 교통 수단이 고민이신가요?
          </p>
          <p style={{ textAlign: "left" }}>
            그렇다면{" "}
            <span style={{ fontWeight: "bold" }}>
              {'"사랑하는 당신의 가족을 위한 맞춤형 정기 구독권"'}
            </span>
            을 선물해보세요!
          </p>
          <div className="flex flex-col content-center">
            <div className="flex justify-center ">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    구독권 종류
                  </p>
                  {/* <p>
                30km 권 + 500원 할인쿠폰 3장 + 옵션구독 5회 80,000원 상당의 것을{" "}
                {"->"} 59,000원에 드리는 혜택 (약 25% 할인) 60km 권 + 500원
                할인쿠폰 6장 + 옵션구독 5회 110,000원 상당의 것을 {"->"}{" "}
                89,000원에 드리는 혜택 (약 20% 할인)
              </p> */}
                  <ul>
                    <li style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: "bold" }}>30KM 구독:</span>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        80,000원
                      </span>{" "}
                      {">"}
                      64,000 원 + 500원 할인 쿠폰 3장{" "}
                      <span style={{ color: "red" }}>(20%)</span>
                    </li>
                    <li style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: "bold" }}>60KM 구독:</span>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        110,000원
                      </span>{" "}
                      {">"}
                      82,500 원 + 500원 할인 쿠폰 6장{" "}
                      <span style={{ color: "red" }}>(25%)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
      <Image src={dog} alt="doggy"></Image>
    </div>
  );
}

export default ThemeSubscribe;
