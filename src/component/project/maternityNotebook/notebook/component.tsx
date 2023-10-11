import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    "width: 60px; height: 60px; top: 15px; left: 25px;",
    "width: 150px; height: 150px; top: 60px; left: 50px;",
    "width: 30px; height: 30px; top: 205px; left: 185px;",
    "width: 20px; height: 20px; top: 247px; left: 165px;",
  ]);
  const week = 0;
  const day = 0;

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
        `}
      >
        <div>{days}일</div>
        <div>
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
      justify-content: center;
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
