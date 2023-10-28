import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { TipType, GraphBtnType } from ".";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ContentBoxLayer = ({
  children,
  title,
  styleFlex,
  styleWidth,
  styleHeight,
}: {
  children: React.ReactNode;
  title: string;
  styleFlex: string;
  styleWidth: string;
  styleHeight: string;
}) => (
  <div
    css={css`
      display: ${styleFlex};

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
      height: 3rem;
      padding: 0;
      border: none;
      position: relative;
      left: ${styleLeft};
      bottom: 7.8vh;
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
      width: 90%;
      border-radius: 20px;
      gap: ${theme.spacing.md};
      padding: ${theme.spacing.sm} 0 ${theme.spacing.xxs} 0;
      white-space: nowrap; // 가로 스크롤의 핵심
      overflow-x: scroll; // 가로 스크롤의 핵심
      &::-webkit-scrollbar {
        width: 1px;
        height: 0.4rem;
        margin-bottom: ${theme.spacing.sm};
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: ${theme.palette.gray[200]};
      }
    `}
  >
    {imgList.map((img) => (
      <img
        css={css`
          border-radius: 20px;
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
      gap: ${theme.spacing.lg};
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

//주차별 Tip

export const WeeksTipLayout = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 100%;
      height: 80%;
      display: flex;
      margin-top: -3rem;
    `}
  >
    {children}
  </div>
);

export const WeeksTipLContainer = ({ days }: { days: number }) => {
  const [circles, setCircles] = useState([
    "width: 50px; height: 50px; top: 25px; left: 25px;",
    "width: 150px; height: 150px; top: 60px; left: 50px;",
    "width: 30px; height: 30px; top: 205px; left: 185px;",
    "width: 20px; height: 20px; top: 247px; left: 165px;",
  ]);
  const week = 14;
  const day = 1;

  return (
    <div
      css={css`
        width: 40%;
        height: 100%;
        position: relative;
      `}
    >
      {circles.map((circle) => (
        <Circle styles={circle}></Circle>
      ))}
      <div
        css={css`
          position: absolute;
          top: 99px;
          left: 90px;
          text-align: center;
          z-index: 1;
        `}
      >
        <div
          css={css`
            ${theme.typography.body1Bold}
          `}
        >
          {days}일
        </div>
        <div
          css={css`
            margin-top: ${theme.spacing.xxs};
            ${theme.typography.body5};
          `}
        >
          {week}주차 {day}일
        </div>
      </div>
    </div>
  );
};
const Circle = ({ styles }: { styles: string }) => {
  return (
    <div
      css={css`
        background-color: ${theme.palette.gray[200]};
        border-radius: 100%;
        position: absolute;
        z-index: 0;
        ${styles}
      `}
    ></div>
  );
};

export const WeeksTipRContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      width: 55%;
      height: 100%;
      padding: ${theme.spacing.xxxs};
    `}
  >
    {children}
  </div>
);
export const TipTitle = ({ moment }: { moment: string }) => (
  <div
    css={css`
      display: flex;
      ${theme.typography.body3Bold}
      margin-bottom:${theme.spacing.xs};
    `}
  >
    임신 {moment}
    <div
      css={css`
        ${theme.typography.body3}
      `}
    >
      의 시작입니다!
    </div>
  </div>
);
export const TipContent = ({ tip }: { tip: TipType }) => (
  <div
    css={css`
      ${theme.typography.body5}
      margin: ${theme.spacing.xs} 0;
    `}
  >
    {tip.index} {tip.title}
    <div
      css={css`
        margin-top: ${theme.spacing.xxxs};
        font-size: 0.5rem;
      `}
    >
      {tip.content}
    </div>
  </div>
);

/*
*
그래프
*
*/

export const GraphLayout = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
    `}
  >
    {children}
  </div>
);
export const GraphBtnContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      height: 80%;
      width: 12rem;
      display: block;
      text-align: center;
    `}
  >
    {children}
  </div>
);
export const GraphContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      height: 30vh;
      width: 60vw;
    `}
  >
    {children}
  </div>
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: { display: false, position: "top" as const },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        color: "#E3E3E3",
      },
    },
  },
};

export function Gragh({ data }: { data: ChartData<"line"> }) {
  return <Line options={options} data={data} />;
}

export const GraphButton = ({
  content,
  setCategory,
}: {
  content: GraphBtnType;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleGraph = () => {
    setCategory(content.title);
  };
  return (
    <button
      css={css`
        border: none;
        background-color: #fff;
        margin: ${theme.spacing.xs} ${theme.spacing.lg};
        color: ${theme.palette.gray[600]};
        font-size: ${theme.typography.body5.fontSize};
        font-weight: ${content.checked
          ? theme.typography.body5Bold.fontWeight
          : theme.typography.body5.fontWeight};
      `}
      onClick={handleGraph}
    >
      {content.title}
    </button>
  );
};

/*
*
하단 정보
*
*/

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

export const ChartContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 95%;
      display: flex;
      flex-wrap: wrap;
      gap: ${theme.spacing.xxs};
      margin-top: -3rem;
      margin-left: ${theme.spacing.xs};
    `}
  >
    {children}
  </div>
);

export const WeeksChart = ({ week, src }: { week: number; src: string }) => {
  const navigate = useNavigate();

  const handleGOChart = () => {
    alert(`chart/${week}로 이동`);
  };
  return (
    <div
      css={css`
        padding-top: ${theme.spacing.xxs};
        text-align: center;
        width: 15vw;
        &:hover {
          background-color: ${theme.palette.gray[200]};
          border-radius: 10px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }
      `}
      onClick={handleGOChart}
    >
      <img
        src={src}
        css={css`
          border-radius: 10px;
          width: 14vw;
        `}
      ></img>
      <div
        css={css`
          margin: ${theme.spacing.xxxs} 0;
          color: ${theme.palette.gray[600]};
          ${theme.typography.body5};
        `}
      >
        {week}주차
      </div>
    </div>
  );
};
