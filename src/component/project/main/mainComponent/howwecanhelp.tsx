import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Updated to center vertically */
  height: 100vh;
`;

const ConsiderBoxItem = styled.div`
  width: 951px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px; /* Add margin for spacing between the two boxes */
  /* Add other styles as needed */
`;

export const Howwecanhelp = () => {
  return(
    <>
     <Container>
      <ConsiderBoxItem>
        <p>01</p>
        <h2>매주 주차별 증상 도움 알람</h2>
        <p>주차별 증상 헷갈리기 쉬웠죠?</p>
        <p>저희가 매주 알림으로 알려드립니다!</p>
      </ConsiderBoxItem>
      <ConsiderBoxItem>
        <p>02</p>
        <h2>산모수첩 공유 및 산부인과 일정 관리</h2>
        <p>수기로 작성되는 산모수첩 매주 공유가 어렵다고 느껴지셨나요?</p>
        <p>산부인과 일정도 관리해드려요 😊</p>
      </ConsiderBoxItem>
    </Container>
    </>
  )
};