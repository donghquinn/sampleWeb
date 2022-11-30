/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import Image from "next/image";
import family from "../public/img/family.jpeg";
import ThemeSubscribe from "../component/common/theme-sub";
import AboutBusySub from "../component/common/unive-sub";

// TODO 기존 택시 이용보다 금액절감에 대해
function Subscribe() {
  return (
    <div>
      <div>
        <h1
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "300%" }}
        >
          정기권 구독
        </h1>
        <p style={{ textAlign: "center" }}>
          또타를 구독하게 된다면 다음과 같은 이점이 있습니다!
        </p>
        <ul>
          <li></li>
        </ul>
        <p style={{ textAlign: "center" }}>
          저희가 제공하는 구독은 두가지로 나뉩니다.
        </p>
        <p style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "bold" }}>FAST 구독권:</span> 바쁜 학생들과
          직장인을 위한 구독권
        </p>
        <p style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "bold" }}>THEME 구독권:</span> 사랑하는
          당신의 가족을 위한 구독권
        </p>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          #해시태그로 당신의 택시 탑승 취향을 알려주세요!
        </p>
        <p style={{ textAlign: "center" }}>
          선택하신 해시태그를 기반으로 당신의 성향과 맞는 기사님을 매칭
          시켜드려요!
        </p>
      </div>

      <div className="flex flex-col content-start">
        <ThemeSubscribe></ThemeSubscribe>
        <AboutBusySub></AboutBusySub>
      </div>
    </div>
  );
}

export default Subscribe;
