import React from "react";
import { MainFooterContainer, MainFooterText } from "./component"; // 스타일 파일 경로를 정확하게 지정하세요.

export const MainFooter = () => {
  return (
    <MainFooterContainer>
      <MainFooterText>
        <h3>산모도 예비아빠도 편한</h3>
        <h1>MO-ING</h1>
      </MainFooterText>
      <svg xmlns="http://www.w3.org/2000/svg" width="621" height="601" viewBox="0 0 621 601" fill="none">
      <path d="M8.41686 134.984C-7.84924 112.556 3.05948 80.7837 29.6716 73.0778L273.718 2.41094C289.804 -2.24705 307.089 3.60908 317.031 17.0855L612.5 417.581C626.814 436.983 620.838 464.545 599.773 476.275L385.866 595.394C368.175 605.245 345.913 600.323 334.024 583.931L8.41686 134.984Z" fill="#D9D9D9"/>
    </svg>
    </MainFooterContainer>
  );
};
