/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
export const Overlay = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => (
  <div
    css={css`
      background-color: rgba(27, 27, 27, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `}
    onClick={closeModal} // Overlay 클릭 시 모달 닫기
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
export const Modal = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => (
  <div css={css``} onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
);

export const Modaldiv = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding: 3.2rem 3.2rem 1rem 3.2rem;
      width: 32rem;
      background-color: #f5f6fa;
      font-family: Inter;
      ${theme.typography.body4Bold}
      border-radius: 0 0 25px 25px;
    `}
  >
    {children}
  </div>
);
export const BodyContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      font-family: Inter;
      color: #afafaf;
      ${theme.typography.body4Bold}
      border-radius: 0 0 25px 25px;
    `}
  >
    {children}
  </div>
);

export const InputContainer = ({ placeholder }: { placeholder: string }) => (
  <input
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #cfcfcf;
      width: 29.6rem;
      border-radius: 20px;
      font-family: Inter;
      ${theme.typography.body4Bold}
      border: double 0px black;
    `}
    placeholder={placeholder}
  ></input>
);
export const InputSelectContainer = ({
  placeholder,
  buttonholder,
}: {
  placeholder: string;
  buttonholder: string;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <input
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1.2rem;
        background-color: #cfcfcf;
        width: 22.6rem;
        border-radius: 20px 0 0 20px;
        font-family: Inter;
        ${theme.typography.body4Bold}
        border: double 0px black;
      `}
      placeholder={placeholder}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1.2rem;
        background-color: #cfcfcf;
        width: 7rem;
        border-radius: 0 20px 20px 0;
        font-family: Inter;

        ${theme.typography.body4Bold}
      `}
    >
      <button
        type="button"
        css={css`
          background-color: #cfcfcf;
          border: 0px solid black;
          border-left: 2px solid #b9b9b9;
          font-family: Inter;
          color: #808080;
          cursor: pointer;
          ${theme.typography.body4Bold}
        `}
        onClick={() => {
          alert("클릭 이벤트를 지정하세요");
        }}
      >
        {buttonholder}
      </button>
    </div>
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

export const TopContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 38.4rem;
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
      padding: 2rem;
      background-color: #cfcfcf;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
    `}
  >
    {children}
  </div>
);
export const TopSelectContainer = ({
  children,
  color,
  style,
  onClick, // onClick 이벤트 핸들러 추가
}: {
  children: React.ReactNode;
  color: string;
  style?: string;
  onClick?: () => void; // 클릭 이벤트 핸들러 타입 추가
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: ${color};
      color: #808080;
      font-family: Inter;
      ${theme.typography.body4Bold}
      align-items: center;
      justify-content: center;
      width: 17.6rem;
      cursor: pointer;
      ${style};
    `}
    onClick={onClick} // 클릭 이벤트 핸들러 연결
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
export const CheckButton = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem 2.4rem;
      background-color: #cfcfcf;
      border-radius: 25px;
      align-items: center;
      justify-content: center;
    `}
  >
    {children}
  </div>
);
export const LoginButton = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;

      flex-direction: column;
      gap: 2.4rem;
      width: 100%;
    `}
  >
    <hr
      css={css`
        border: solid 0.25px #b9b9b9;
        width: 80%;
      `}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0.8rem 1.2rem;
        background-color: #cfcfcf;
        border-radius: 25px;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
      `}
    >
      {children}
    </div>
  </div>
);
