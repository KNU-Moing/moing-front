import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button<{ active: boolean }>`
  width: 391px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 109px;
  background: ${props => (props.active ? "#9C9C9C" : "transparent")};
  color: ${props => (props.active ? "white" : "#808080")}; /* 수정 */
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  position: relative;
`;

const HeaderContainer = styled.div`
  text-align: left;
  margin-left: 211px;
  margin-top: 100px;
  align-self: flex-start;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

export const Intro = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const buttonData = [
    "출산 전 지식 도움",
    "산모 수첩/일기 공유",
    "출산 후 케어 도움"
  ];

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <h1>서비스 소개</h1>
      </HeaderContainer>
      <ContentContainer>
        {activeButton !== null && <p>{buttonData[activeButton]}</p>}
      </ContentContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {buttonData.map((text, index) => (
          <Button
            key={index}
            active={activeButton === index}
            onClick={() => handleButtonClick(index)}
          >
            {text}
          </Button>
        ))}
      </div>
    </PageContainer>
  );
};
