import React from "react";
import { Container, ConsiderBoxItem } from "./component";

export const Howwecanhelp = () => {
  return (
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
  );
};
