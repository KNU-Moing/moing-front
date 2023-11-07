import React from "react";
import { ConsiderTitle, ConsiderContainer, ConsiderQ, ConsiderA } from "./component"; // 이곳에 스타일 파일 경로를 넣으세요.

export const Consider = () => {
  return (
    <>
    <ConsiderTitle>예비아빠의 고민</ConsiderTitle>
    <ConsiderContainer>
      <ConsiderQ>
        <h1>Q</h1>
        <p>아내가 임신중에 어떻게 해야하는지</p>
        <p>찾아봐도 이해가 안되는 부분들이 있어요.</p>
      </ConsiderQ>
      <ConsiderA>
        <h1>A</h1>
        <h3><img src="./img/considerLogoImg.png" alt="예비아빠고민"/>에서 도와드립니다!</h3>
      </ConsiderA>
    </ConsiderContainer>
    </>
  );
};
