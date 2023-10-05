/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import theme from "../../../styles/theme";

export const CookMainBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      font-family: Inter;
      ${theme.typography.body4Bold}
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 52.5rem;
        height: 253px;
        background-color: #d9d9d9;
        font-family: Inter;
        border-radius: 10px;
      `}
    />
    {children}
  </div>
);

export const Inner = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 10rem;
      padding: 7.5rem;
      ${theme.typography.body4Bold}
    `}
  >
    {children}
  </div>
);
export const RowContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      gap: 1.6rem;
    `}
  >
    {children}
  </div>
);
export const FlexContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.6rem;
      width: 100%;
      justify-content: space-around;
    `}
  >
    {children}
  </div>
);
export const BlockContainer = () => (
  <div
    css={css`
      width: 100%;
      height: 15rem;
      background-color: #d9d9d9;
    `}
  ></div>
);
export const CenterContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      display: flex;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    {children}
  </div>
);

export const CenterTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      font-size: 2rem;
      font-family: "JAM";
      font-style: normal;
      font-weight: 700;
      border-radius: 1.2rem;
      line-height: 1.5;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;
    `}
  >
    {children}
  </div>
);
export const ArrowComponenet = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
      fill="#377DFF"
    />
  </svg>
);

export const CookSubBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      ${theme.typography.body4Bold}
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 31.5rem;
        height: 18rem;
        background-color: #d9d9d9;
        font-family: Pretendard;
        border-radius: 10px;
      `}
    />
    {children}
  </div>
);
export const CookTestBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      ${theme.typography.body4Bold}
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 32.5rem;
        height: 27.8rem;
        background-color: #d9d9d9;
        font-family: Pretendard;
        border-radius: 10px;
      `}
    />
    {children}
  </div>
);
export const CookArrowBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      width: 32.5rem;
      height: 27.8rem;
      align-items: center;
      justify-content: center;
      ${theme.typography.body1Bold}
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="176"
      height="104"
      viewBox="0 0 176 104"
      fill="none"
    >
      <path
        d="M0 48H174.5M174.5 48L127.5 103M174.5 48L127.5 1"
        stroke="black"
      />
    </svg>

    {children}
  </div>
);
export const CookSubTitte = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      font-family: Pretendard;
      ${theme.typography.body3Bold}
    `}
  >
    {children}
  </div>
);
export const CookSubTitle2 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      font-family: Pretendard;
      width: 31.5rem;
      ${theme.typography.body4Bold}
    `}
  >
    {children}
  </div>
);
