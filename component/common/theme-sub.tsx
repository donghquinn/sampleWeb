import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import dog from "../../public/img/dog.png";
import carseat from "../../public/img/carseat.png";
import Image from "next/image";
import family from "../../public/img/family.jpeg";

function ThemeSubscribe() {
  return (
    <div className="flex flex-row justify-center space-y-5">
      <Card sx={{ maxWidth: 1000 }} style={{ width: 600, margin: 10 }}>
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
          <div className="flex flex-col content-center">
            <div className="flex justify-center">
              <Image
                src={family}
                alt="family"
                height={400}
                width={400}
                style={{ alignItems: "center" }}
              ></Image>
            </div>
          </div>

          <p style={{ textAlign: "left" }}>
            사랑하는 당신의 <span style={{ fontWeight: "bold" }}>가족</span>을
            위한 구독권
          </p>
          <p style={{ textAlign: "left" }}>
            사랑하는 우리 <span style={{ fontWeight: "bold" }}>아이</span>의
            안전이 걱정되시나요?
          </p>
          <p style={{ textAlign: "left" }}>
            소중한 우리 <span style={{ fontWeight: "bold" }}>반려동물</span>과
            편안하게 택시를 탑승하고 싶으신가요?
          </p>
          <p style={{ textAlign: "left" }}>
            그렇다면{" "}
            <span style={{ fontWeight: "bold" }}>
              {'"사랑하는 당신의 가족을 위한 맞춤형 정기 구독권"'}
            </span>
            을 선물해보세요!
          </p>

          <div className="flex flex-col content-center ">
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
          <div>
            <div className="flex flex-col content-start">
              <div className="flex justify-start">
                <Image
                  src={dog}
                  alt="doggy"
                  height="250"
                  width="250"
                  style={{ alignContent: "start" }}
                ></Image>
                <div>
                  <p
                    className="flex flex-row content-end"
                    style={{ margin: 30, marginLeft: 30, fontWeight: "bold" }}
                  >
                    반려동물을 위한 옵션
                  </p>
                  <p style={{ marginLeft: 30 }}>
                    반려동물과 함께 택시 탑승이 가능하며,
                  </p>
                  <p style={{ marginLeft: 30 }}>반려견 카시트와 배변패드가</p>
                  <p style={{ marginLeft: 30 }}>구비되어 있습니다.</p>
                  <ul style={{ margin: 10, marginLeft: 30 }}>
                    <li>최대 3마리까지 동승 가능</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col content-start">
                <div className="flex justify-start">
                  <Image
                    src={carseat}
                    alt="doggy"
                    height="250"
                    width="250"
                    style={{ alignContent: "end" }}
                  ></Image>
                  <div>
                    <p
                      className="flex flex-row content-end"
                      style={{ margin: 30, marginLeft: 30, fontWeight: "bold" }}
                    >
                      사랑하는 우리 아이를 위한 옵션
                    </p>
                    <p style={{ marginLeft: 30 }}>아이와 함께 택시 탑승 시</p>
                    <p style={{ marginLeft: 30 }}>차 뒷자석에 카시트를 놓아</p>
                    <p style={{ marginLeft: 30 }}>
                      안전한 탑승을 할 수 있습니다.
                    </p>
                    <ul style={{ margin: 10, marginLeft: 30 }}>
                      <li>영유아용 (0세 ~ 24개월, 9 ~ 18kg)</li>
                      <li>주니어용 (만 4세 ~ 만 12세, 15 ~ 36 kg)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ThemeSubscribe;
