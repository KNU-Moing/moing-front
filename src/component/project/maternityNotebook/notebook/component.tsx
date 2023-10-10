import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { on } from "events";
import { useState } from "react";

export const ContentBoxLayer = ({
  children,
  title,
  styleWidth,
  styleHeight,
}: {
  children: React.ReactNode;
  title: string;
  styleWidth: string;
  styleHeight: string;
}) => (
  <div
    css={css`
      display: flex;
      border: 1px solid ${theme.palette.gray[300]};
      border-radius: 20px;
      width: ${styleWidth};
      height: ${styleHeight};
      margin-top: ${theme.spacing.xxs};
    `}
  >
    <ContentTitle title={title}></ContentTitle>
    {children}
  </div>
);
const ContentTitle = ({ title }: { title: string }) => (
  <div
    css={css`
      color: ${theme.palette.gray[700]};
      ${theme.typography.body4Bold}
      padding: ${theme.spacing.sm};
    `}
  >
    {title}
  </div>
);
export const MoreButton = ({
  onClick,
  styleLeft,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  styleLeft: string;
}) => (
  <button
    css={css`
      ${theme.typography.body5}
      background-color: #fff;
      color: ${theme.palette.gray[600]};
      height: 4.6rem;
      padding: 0;
      border: none;
      position: relative;
      left: ${styleLeft};
    `}
    onClick={onClick}
  >
    더보기
  </button>
);

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
}) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      justify-content: space-between;
      gap: ${theme.spacing.sm};
    `}
  >
    {children}
  </div>
);

export const ChartDetailSection = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    {children}
  </div>
);

export const ChartContent = ({
  kind,
  value,
  unit,
}: {
  kind: string;
  value: string;
  unit: string;
}) => {
  return (
    <div
      css={css`
        text-align: center;
        padding: ${theme.spacing.md} ${theme.spacing.xl};
      `}
    >
      <div
        css={css`
          ${theme.typography.body4}
          margin-bottom: ${theme.spacing.xs};
        `}
      >
        {kind}
      </div>
      {unit === "" ? (
        //일반 검사
        <div
          css={css`
            padding-top: ${theme.spacing.xxs};
            ${theme.typography.body5}
          `}
        >
          {value}
        </div>
      ) : (
        <UnitDetail value={value} unit={unit}></UnitDetail>
      )}
    </div>
  );
};

const UnitDetail = ({ value, unit }: { value: string; unit: string }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          ${theme.typography.body3Bold}
        `}
      >
        {value}
      </div>
      <div
        css={css`
          padding-top: ${theme.spacing.xs};
          ${theme.typography.body6}
        `}
      >
        {unit}
      </div>
    </div>
  );
};

export const HospitalVisitDay = ({
  year,
  month,
  day,
  days,
}: {
  year: number;
  month: number;
  day: number;
  days: string;
}) => {
  return (
    <div
      css={css`
        padding: 6vh 5vw;
        ${theme.typography.body4}
      `}
    >
      {year}년 {month}월 {day}일 ({days})
    </div>
  );
};

export const EtcOverLay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      justify-content: space-between;
      margin-top: ${theme.spacing.sm};
    `}
  >
    {children}
  </div>
);
