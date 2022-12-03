import React from "react";
import Image from "next/image";
import busy from "../../public/img/busy.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function AboutBusySub() {
  return (
    <div className="flex flex-row justify-center space-y-5">
      <Card sx={{ maxWidth: 1000 }} style={{ width: 600 }}>
        <CardContent>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "300%",
            }}
          >
            FAST 구독권
          </h1>
          <div className="flex flex-col content-center">
            <div className="flex justify-center">
              <Image
                src={busy}
                alt="family"
                height={400}
                width={400}
                style={{ alignItems: "center" }}
              ></Image>
            </div>
          </div>
          <p style={{ textAlign: "left" }}>
            바쁜 <span style={{ fontWeight: "bold" }}>대학생 / 직장인</span>을
            위한 구독권
          </p>
          <p style={{ textAlign: "left" }}>
            {" "}
            <span style={{ fontWeight: "bold" }}>빠른 배차</span>가
            필요하신가요?{" "}
          </p>
          <p style={{ textAlign: "left" }}> 택시 이용 횟수가 많으신가요? </p>
          <p style={{ textAlign: "left" }}>
            {" "}
            그렇다면
            <span style={{ fontWeight: "bold" }}>
              {" "}
              바쁜 학생들과 직장인을 위한 구독권
            </span>{" "}
            을 사용해 보세요!
          </p>
          <div className="flex flex-col content-center">
            <div className="flex justify-center ">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  {/* <p>
                30km 권 + 500원 할인쿠폰 3장 30,000원 상당의 것을 {"->"}{" "}
                29,000원 + 500원 할인쿠폰 3장에 드리는 혜택 (약 10% 할인) 60km
                권 + 500원 할인쿠폰 6장 60,000원 상당의 것을 {"->"} 59,000원 +
                500원 할인쿠폰 6장에 드리는 혜택 (약 10% 할인)
              </p> */}
                  <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    구독권 종류
                  </p>
                  <ul>
                    <li style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: "bold" }}>30KM 구독:</span>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        30,000원
                      </span>{" "}
                      {">"}
                      29,000 원 + 500원 할인 쿠폰 3장{" "}
                      <span style={{ color: "red" }}>(10%)</span>
                    </li>
                    <li style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: "bold" }}>60KM 구독:</span>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        60,000원
                      </span>{" "}
                      {">"}
                      59,000 원 + 500원 할인 쿠폰 6장{" "}
                      <span style={{ color: "red" }}>(10%)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutBusySub;
