import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      gap: ${theme.spacing.sm};
      padding-top: 24vh;
      padding-bottom: 4vh;
      padding-left: 8vw;
    `}
  >
    {children}
  </div>
);

export const RecommendLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 78vh;
      width: 90%;
      text-align: center;
    `}
  >
    <TopicBox> {children}</TopicBox>
    <div
      css={css`
        width: 21vw;
        font-size: ${theme.typography.body6};
      `}
    >
      임신 중기의 시작! 다른 예비엄마들은 이렇게 검색했어요 누르면 관련 정보
      내용들이 있어요!
    </div>
  </div>
);
export const TopicBox = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      height: 62vh;
      background-color: ${theme.palette.gray[200]};
      position: relative;
    `}
  >
    {children}
  </div>
);

export const TitleBar = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      position: relative;
      justify-content: center;
      width: 90%;
      margin: ${theme.spacing.sm} 0;
      font: ${theme.typography.body2};
    `}
  >
    <div>쑥쑥이엄마의 고민을 덜어드릴게요</div>
    {children}
  </div>
);
export const TitleIcon = ({ styleRight }: { styleRight: string }) => (
  <button
    css={css`
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 100%;
      margin: 0 ${theme.spacing.xxs};
      position: absolute;
      right: ${styleRight};
    `}
  ></button>
);

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      justify-content: center;
      margin-top: -${theme.spacing.xxl};
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {children}
  </div>
);

export const CommunityContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div
    css={css`
      width: 29vw;
      color: ${theme.palette.gray[700]};
      padding: 1vh 4vw 1vh 7vw;
      font-size: ${theme.typography.body5};
    `}
  >
    {title}
    <div
      css={css`
        padding: 1vh 2.5vw;
        font-size: ${theme.typography.body6};
      `}
    >
      {content}
    </div>
  </div>
);
