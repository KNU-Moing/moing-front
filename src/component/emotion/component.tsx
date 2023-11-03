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
      background-color: white;
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
      color: black;
      ${theme.typography.body4Bold}
      border-radius: 0 0 25px 25px;
      font-size: 24px;
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
      background-color: #fff8f8;
      width: 29.6rem;
      border-radius: 20px;
      font-family: Inter;
      ${theme.typography.body4Bold}
      border: double 0px black;

      color: #ffd1d1;
      ::placeholder {
        color: #ffd1d1;
      }
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
        background-color: #fff8f8;
        width: 22.6rem;
        border-radius: 20px 0 0 20px;
        font-family: Inter;
        ${theme.typography.body4Bold}
        border: double 0px black;
        color: #ffd1d1;
        ::placeholder {
          color: #ffd1d1;
        }
      `}
      placeholder={placeholder}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1.2rem;
        background-color: #fff8f8;
        width: 7rem;
        border-radius: 0 20px 20px 0;
        font-family: Inter;

        ${theme.typography.body4Bold}
      `}
    >
      <button
        type="button"
        css={css`
          background-color: #fff8f8;
          border: 0px solid black;
          border-left: 2px solid #ffd1d1;
          font-family: Inter;
          color: #ffd1d1;
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
export const Images = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 2.6rem;
      background-color: ${backgroundColor};
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      color: white;
    `}
  >
    {children}
  </div>
);
export const TopSelectContainer = ({
  children,
  color,
  fontcolor,
  style,
  onClick,
}: {
  children: React.ReactNode;
  color: string;
  fontcolor: string;
  style?: string;
  onClick?: () => void;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: ${color};
      color: ${fontcolor};
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
      padding: 1.2rem 3.2rem;
      background-color: #ff9494;
      color: white;
      border-radius: 30px;
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
      justify-content: center;
      align-items: center;
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
        flex-direction: row;
        padding: 0.8rem 1.2rem;
        width: 20rem;
        background-color: #fee500;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
      `}
    >
      <div
        css={css`
          margin-right: 1rem;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.00004 1.06695C4.02919 1.06695 1.8e-05 4.19635 1.8e-05 8.05594C1.8e-05 10.4563 1.55842 12.5723 3.93154 13.8309L2.93305 17.4977C2.84483 17.8217 3.21343 18.08 3.49648 17.8922L7.87336 14.9883C8.24272 15.0241 8.61809 15.045 9.00004 15.045C13.9705 15.045 17.9999 11.9157 17.9999 8.05594C17.9999 4.19635 13.9705 1.06695 9.00004 1.06695Z"
            fill="black"
          />
        </svg>
      </div>

      {children}
    </div>
  </div>
);
