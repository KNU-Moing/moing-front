import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProp {
  onClick: () => void;
}

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    {children}
  </div>
);

export const MyPageContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div
    css={css`
      font-size: ${theme.typography.body2Bold.fontSize};
      font-weight: ${theme.typography.body2Bold.fontWeight};
      width: 70%;
    `}
  >
    {title}
    <div
      css={css`
        background-color: ${theme.palette.gray[200]};
        width: 100%;
        padding: ${theme.spacing.sm};
        margin-top: ${theme.spacing.xs};
        border-radius: 20px;
        display: flex;
      `}
    >
      {children}
    </div>
  </div>
);

/*
*
상단 프로필
*
*/

export const ProfileSection = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding-top: 110px;
      display: flex;
      flex-direction: row;
      margin: 20px;
    `}
  >
    {children}
  </div>
);

export const Profile = (props: { name: string; src: string }) => {
  const size = "120px";
  return (
    <div
      css={css`
        text-align: center;
        margin: ${theme.spacing.md};
      `}
    >
      <ProfileImg src={props.src} size={size}></ProfileImg>
      <div>{props.name}</div>
    </div>
  );
};

export const ProfileImg = (props: { src: string; size: string }) => {
  return (
    <img
      css={css`
        border-radius: 70%;
        margin: ${theme.spacing.sm};
        width: ${props.size};
        height: ${props.size};
      `}
      src={props.src}
      alt="프로필 사진"
    ></img>
  );
};

export const PregancyPeriod = (props: {
  name: string;
  day: number;
  week: number;
}) => {
  return (
    <div
      css={css`
        text-align: center;
        font-size: 0.9rem;
      `}
    >
      <div
        css={css`
          padding-top: ${theme.spacing.xxxl};
        `}
      >
        {props.name}와 함께 한지
      </div>
      <div
        css={css`
          font-size: ${theme.font.xl};
          padding-top: ${theme.spacing.xxs};
        `}
      >
        {props.day}일
      </div>
      <div>{props.week}주차</div>
    </div>
  );
};

/*
*
내 정보
*
*/

export const InfoLayer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      alignitems: center;
      justifycontent: flex-start;
    `}
  >
    {children}
  </div>
);

export const InfoSection = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 50%;
    `}
  >
    {children}
  </div>
);
export const InfoLeftSection = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <InfoSection
    css={css`
      background-color: ${theme.palette.gray[800]};
      border-right: solid 2px ${theme.palette.gray[300]};
    `}
  >
    {children}
  </InfoSection>
);
export const InfoBtnSection = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
    `}
  >
    {children}
  </div>
);

export const InfoDetail = (props: { title: string; context: string }) => {
  return (
    <div
      css={css`
        display: flex;
        margin-bottom: ${theme.spacing.sm};
        font-size: ${theme.typography.body4.fontSize};
        font-weight: ${theme.typography.body4.fontWeight};
      `}
    >
      <div
        css={css`
          font-size: ${theme.typography.body3Bold.fontSize};
          font-weight: ${theme.typography.body3Bold.fontWeight};
          width: 10vw;
        `}
      >
        {props.title}
      </div>
      {props.context}
    </div>
  );
};

export const InfoProfile = (props: { name: string; day: number }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: ${theme.spacing.md};
        font-size: ${theme.typography.body4.fontSize};
        font-weight: ${theme.typography.body4.fontWeight};
      `}
    >
      <div
        css={css`
          font-size: ${theme.typography.body1Bold.fontSize};
          font-weight: ${theme.typography.body1Bold.fontWeight};
          margin-right: 2vw;
        `}
      >
        {props.name}
      </div>
      <div>14주차 1일 임신 초기</div>
    </div>
  );
};

export const ChangeButton = ({ onClick }: ButtonProp) => {
  return (
    <button
      css={css`
        border: none;
        height: ${theme.spacing.md};
        margin-right: ${theme.spacing.xxs};
        text-decoration: underline;
      `}
      onClick={onClick}
    >
      변경하기
    </button>
  );
};

export const BlankSection = (props: { title: string }) => {
  return (
    <div style={{ marginLeft: `${theme.spacing.md}` }}>
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
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
};
