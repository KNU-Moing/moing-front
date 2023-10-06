import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

/*
*
오늘의 진료 기록
*
*/
export const TodayChart = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      color: ${theme.palette.gray[600]};
      padding: ${theme.spacing.sm} 0;
    `}
  >
    {children}
  </div>
);

export const ImgContainer = ({ imgList }: { imgList: string[] }) => (
  <div
    css={css`
      display: flex;
      gap: ${theme.spacing.md};
      padding: ${theme.spacing.sm} 0;
    `}
  >
    {imgList.map((img) => (
      <img
        css={css`
          width: 32vw;
        `}
        src={img}
      ></img>
    ))}
  </div>
);

export const ChartDetailLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => <div css={css``}>{children}</div>;

export const ChartDetailSection = ({
  children,
}: {
  children: React.ReactNode;
}) => <div css={css``}>{children}</div>;
