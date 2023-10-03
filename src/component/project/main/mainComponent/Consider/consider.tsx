import React from "react";
import { ConsiderTitle, ConsiderContainer, ConsiderQ, ConsiderA } from "./component"; // 이곳에 스타일 파일 경로를 넣으세요.

export const Consider = () => {
  return (
    <>
    <ConsiderTitle>예비아빠의 고민</ConsiderTitle>
    <ConsiderContainer>
      <ConsiderQ>
        <h1>Q</h1>
        <p><span>아내가 임신</span>중에<span>어떻게 해야하는지</span></p>
        <p>찾아봐도 이해가 안되는 부분들이 있어요.</p>
      </ConsiderQ>
      <ConsiderA>
        <h1>A</h1>
        <h3>MO-ING에서 도와드립니다!</h3>
      </ConsiderA>
    </ConsiderContainer>
    </>
  );
};
