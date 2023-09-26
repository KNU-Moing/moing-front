import React, { useState } from 'react';
import {
  Button,
  PageContainer,
  HeaderContainer,
  ContentContainer,
} from './component';

export const Intro = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const buttonData = [
    '출산 전 지식 도움',
    '산모 수첩/일기 공유',
    '출산 후 케어 도움',
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
