// MainFooterStyles.js
import styled from "@emotion/styled";

export const MainFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 채우도록 설정합니다. */
`;

export const MainFooterText = styled.div`
  text-align: center;
  color: #808080;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  h3 {
    font-size: 36px; /* 원하는 사이즈로 조절하세요. */
  }

  h1 {
    font-size: 48px; /* 원하는 사이즈로 조절하세요. */
  }
`;
