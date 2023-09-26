import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProp1 {
  onClick: () => void;
}
interface ButtonProp2 {
  context: string;
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
  setState: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

export const Profile = (props: { name: string; src: string }) => {
  return (
    <div style={{ textAlign: "center", margin: theme.spacing.md }}>
      <img
        style={{ borderRadius: "70%", margin: theme.spacing.sm }}
        src={props.src}
        alt="프로필 사진"
      ></img>
      <div>{props.name}</div>
    </div>
  );
};
export const PregancyPeriod = (props: {
  name: string;
  day: number;
  week: number;
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "0.9rem", paddingTop: theme.spacing.xxxl }}>
        {props.name}와 함께 한지
      </div>
      <div style={{ fontSize: theme.font.xl, paddingTop: theme.spacing.xxs }}>
        {props.day}일
      </div>
      <div style={{ fontSize: "0.9rem" }}>{props.week}주차</div>
    </div>
  );
};

export const BlankSection = (props: { title: string }) => {
  return (
    <div style={{ margin: theme.spacing.xs }}>
      <div
        style={{
          fontSize: theme.typography.body2Bold.fontSize,
          fontWeight: theme.typography.body2Bold.fontWeight,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          backgroundColor: theme.palette.gray[200],
          height: "70vh",
          width: "35vw",
          margin: theme.spacing.xs,
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
};

export const Information = (props: { title: string; context: string }) => {
  return (
    <div style={{ display: "flex", marginBottom: theme.spacing.sm }}>
      <div
        style={{
          fontSize: theme.typography.body3Bold.fontSize,
          fontWeight: theme.typography.body3Bold.fontWeight,
          width: "10vw",
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          fontSize: theme.typography.body4.fontSize,
        }}
      >
        {props.context}
      </div>
    </div>
  );
};

export const ChangeButton = ({ onClick }: ButtonProp1) => {
  return (
    <button
      style={{
        border: "none",
        height: theme.spacing.md,
        marginRight: theme.spacing.xxs,
        textDecoration: "underline",
      }}
      onClick={onClick}
    >
      변경하기
    </button>
  );
};

/*
*
*
Modal
*
*
*/

export const CancelBtn = ({ onClick }: ButtonProp1) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: theme.spacing.md,
        right: theme.spacing.md,
        border: "none",
      }}
    >
      X
    </button>
  );
};
export const SubmitBtn = ({ onClick }: ButtonProp1) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        borderRadius: "40px",
        width: "8rem",
        height: "3rem",
        fontSize: theme.font.xxs,
        backgroundColor: theme.palette.gray[300],
      }}
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

const InputText = ({ onChange }: { onChange: () => void }) => (
  <input
    type="text"
    onChange={onChange}
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
      border-left: solid 1px ${theme.palette.gray[500]};
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
        <input
          type="text"
          value={email}
          readOnly
          style={{
            width: "18vw",
            border: "none",
            borderRadius: "15px 0 0 15px",
            backgroundColor: theme.palette.gray[300],
          }}
        />
        <InputBtn onClick={handleShow} context="변경"></InputBtn>
      </InputContainer>
    </InfoContainer>
  );
};

export const InputWithBtn = ({
  context,
  btnContext,
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
        <InputText onChange={() => onChange}></InputText>
        <InputBtn onClick={onClick} context={btnContext}></InputBtn>
      </InputContainer>
    </InfoContainer>
  );
};

export const InputBox = ({
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
