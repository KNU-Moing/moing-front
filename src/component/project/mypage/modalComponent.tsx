import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProp {
  onClick: () => void;
}
interface EmailInfoProps {
  email: string;
  handleShow: () => void;
}
interface InputPwdProps {
  context: string;
  setPwd: React.Dispatch<React.SetStateAction<string>>;
}
interface InputWithBtnProps {
  context: string;
  btnContext: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

export const CancelBtn = ({ onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      css={css`
        position: absolute;
        top: ${theme.spacing.md};
        right: ${theme.spacing.md};
        border: none;
        background-color: ${theme.palette.gray[100]};
      `}
    >
      X
    </button>
  );
};
export const SubmitBtn = ({ onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      css={css`
        border: none;
        border-radius: 40px;
        width: 8rem;
        height: 3rem;
        font-size: ${theme.font.xxs};
        background-color: ${theme.palette.gray[300]};
      `}
    >
      변경하기
    </button>
  );
};

const InfoContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      font-size: ${theme.font.xxs};
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${theme.spacing.sm};
    `}
  >
    {children}
  </div>
);

const InputContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      height: 2.5rem;
      width: 23vw;
      border-radius: 15px;
      background-color: ${theme.palette.gray[300]};
      display: flex;
      justify-content: space-between;
      padding: 0 ${theme.spacing.xs} 0 ${theme.spacing.sm};
    `}
  >
    {children}
  </div>
);

const InputText = ({
  value,
  onChange,
}: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <input
    type="text"
    onChange={onChange}
    value={value}
    css={css`
      height: 90%;
      width: 73%;
      background-color: ${theme.palette.gray[300]};
      border: none;

      &:focus {
        outline: none;
      }
    `}
  ></input>
);

const InputBtn = ({
  onClick,
  context,
}: {
  onClick: () => void;
  context: string;
}) => (
  <button
    onClick={onClick}
    css={css`
      background-color: ${theme.palette.gray[300]};
      border-left: solid 2px ${theme.palette.gray[400]};
      fontsize: ${theme.font.xs};
      border: none;
    `}
  >
    {context}
  </button>
);

export const InputPwd = ({ context, setPwd }: InputPwdProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  return (
    <InfoContainer>
      {context}
      <input
        type="password"
        onChange={onChange}
        css={css`
          width: 18vw;
          height: 6vh;
          border-radius: 15px;
          background-color: ${theme.palette.gray[300]};
          border: none;
          padding: 0 ${theme.spacing.sm};
          &:focus {
            outline: none;
          }
        `}
      ></input>
    </InfoContainer>
  );
};
export const EmailInfo = ({ email, handleShow }: EmailInfoProps) => {
  return (
    <InfoContainer>
      이메일
      <InputContainer>
        <InputText value={email} onChange={() => {}}></InputText>
        <InputBtn onClick={handleShow} context="변경"></InputBtn>
      </InputContainer>
    </InfoContainer>
  );
};

export const InputWithBtn = ({
  context,
  btnContext,
  state,
  setState,
  onClick,
}: InputWithBtnProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.target.value);
  };

  return (
    <InfoContainer>
      {context}
      <InputContainer>
        <InputText value={state} onChange={onChange}></InputText>
        <InputBtn onClick={onClick} context={btnContext}></InputBtn>
      </InputContainer>
    </InfoContainer>
  );
};

export const InputHospital = ({
  context,
  setContext,
}: {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContext(e.target.value);
  };
  return (
    <div
      css={css`
        width: 28vw;
        height: 2.5rem;
        display: flex;
        justify-content: space-between;
        background-color: ${theme.palette.gray[300]};
        margin: ${theme.spacing.sm} 0;
        padding: 0 ${theme.spacing.xl};
        border-radius: 15px;
      `}
    >
      <input
        type="text"
        onChange={onChange}
        css={css`
          width: 85%;
          height: 90%;
          border: none;
          background-color: ${theme.palette.gray[300]};
          &:focus {
            outline: none;
          }
        `}
      ></input>
      {context === "" ? <button></button> : ""}
    </div>
  );
};
