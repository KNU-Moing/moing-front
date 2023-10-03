/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from "react";
import { Container, ConsiderBoxItem } from "./component";

const slideData = [
  {
    title: "매주 주차별 증상 도움 알람",
    description: "주차별 증상 헷갈리기 쉬웠죠?",
    additionalInfo: "저희가 매주 알림으로 알려드립니다!",
  },
  {
    title: "산모수첩 공유 및 산부인과 일정 관리",
    description: "수기로 작성되는 산모수첩 매주 공유가 어렵다고 느껴지셨나요?",
    additionalInfo: "산부인과 일정도 관리해드려요 😊",
  },
  {
    title: "각종 다양한 산모 도우미 서비스 ",
    description: "유익한 산모 도움 서비스를 즐길 수 없었나요?",
    additionalInfo: "모잉은 사용자들의 만족감을 충족시킵니다.",
  }
];

const itemStyle = css`
  transform: translateX(0);
  transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1); /* 느린 애니메이션 */
`;

const slideContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1); /* 애니메이션 설정 */
  transform: translateX(-50%); /* 초기 위치 설정 */
`;

export const Howwecanhelp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        css={[
          slideContainerStyle,
          {
            transform: `translateX(${isHovered ? 0 : '-50%'})`, // 슬라이드 이동
          },
        ]}
      >
        {slideData.map((item, index) => (
          <ConsiderBoxItem
            key={index}
            css={itemStyle}
          >
            <p>0{index + 1}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.additionalInfo}</p>
          </ConsiderBoxItem>
        ))}
      </div>
    </Container>
  );
};
