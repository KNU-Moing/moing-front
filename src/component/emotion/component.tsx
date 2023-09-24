/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      background-color: rgba(27, 27, 27, 0.8);
      position: fixed; /* 불투명한 배경을 뷰포트에 고정 */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `}
  >
    {children}
  </div>
);

export const ModalBack = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    `}
  >
    {children}
  </div>
);

export const Modaldiv = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding: 3.2rem;
      width: 32rem;
      height: 44rem;
      background-color: #f5f6fa;
      border-radius: 25px;
    `}
  >
    {children}
  </div>
);

export const Inputs = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #cfcfcf;
      border-radius: 20px;
    `}
  >
    {children}
  </div>
);

export const Rowdiv = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;
    `}
  >
    {children}
  </div>
);

export const Rowdiv2 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}
  >
    {children}
  </div>
);
export const Images = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #cfcfcf;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 3rem;
    `}
  >
    {children}
  </div>
);
export const Images1 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #cfcfcf;
      align-items: center;
      justify-content: center;
      width: 16rem;
      height: 3rem;
    `}
  >
    {children}
  </div>
);
export const Images2 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #ffffff;
      align-items: center;
      justify-content: center;
      width: 16rem;
      height: 3rem;
    `}
  >
    {children}
  </div>
);
export const Button = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #cfcfcf;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 1rem;
    `}
  >
    {children}
  </div>
);
