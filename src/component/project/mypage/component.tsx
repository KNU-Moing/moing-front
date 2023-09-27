import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProp {
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

export const ChangeButton = ({ onClick }: ButtonProp) => {
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
