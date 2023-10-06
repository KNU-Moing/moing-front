import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { useState } from "react";

export const TitleBar = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      padding: ${theme.spacing.sm} 0;
      color: ${theme.palette.gray[600]};
    `}
  >
    {children}
  </div>
);

export const WriteButton = () => {
  const src = "/Img/notebookWriteBtn.png";
  return (
    <button
      css={css`
        display: flex;
        align-items: center;
        border: none;
        background-color: #ffffff;
        padding: 0 ${theme.spacing.md};
        color: ${theme.palette.gray[600]};
        font: ${theme.typography.body4};
      `}
      onClick={() => alert("글쓰기 페이지 이동")}
    >
      글쓰기
      <img
        src={src}
        css={css`
          width: 20px;
        `}
      ></img>
    </button>
  );
};

/*
*
커스텀 select
*
*/
export const CustomSelect = ({
  setState,
  selected,
  sortList,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  sortList: string[];
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div>
      <SelectBtn onClick={handleClick}>
        <RiArrowDropDownLine></RiArrowDropDownLine>
        {selected}
      </SelectBtn>
      <SelectUl isShown={isOpened}>
        {sortList.map((item) => (
          <SelectLi value={item} setState={setState}></SelectLi>
        ))}
      </SelectUl>
    </div>
  );
};
const SelectBtn = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    css={css`
      width: 7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      background-color: #ffffff;
      color: ${theme.palette.gray[600]};
      font-size: ${theme.typography.body4.fontSize};
      font-weight: ${theme.typography.body4.fontWeight};
    `}
    onClick={onClick}
  >
    {children}
  </button>
);
const SelectUl = ({
  children,
  isShown,
}: {
  children: React.ReactNode;
  isShown: boolean;
}) => (
  <ul
    css={css`
      list-style-type: none;
      padding: 0;
      margin: 4px 0 0 0;
      position: absolute;
      cursor: pointer;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      display: ${isShown ? "inline-block" : "none"};
      background-color: #fff;
      font-size: ${theme.typography.body4.fontSize};
      font-weight: ${theme.typography.body4.fontWeight};
    `}
  >
    {children}
  </ul>
);
const SelectLi = ({
  value,
  setState,
}: {
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChoose = () => {
    setState(value);
  };
  return (
    <li
      css={css`
        padding: 0.2rem 0.5rem 0.2rem 2rem;
        &:hover {
          background-color: ${theme.palette.gray[200]};
        }
      `}
      onClick={handleChoose}
    >
      {value}
    </li>
  );
};

/*
*
일기 목록
*
*/
export const DiaryOverlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      padding: ${theme.spacing.sm} 0;
      color: ${theme.palette.gray[600]};
      flex-wrap: wrap;
      gap: ${theme.spacing.lg};
      ${theme.typography.body4Bold};
    `}
  >
    {children}
  </div>
);

interface DiaryData {
  index: number;
  img: string;
  week: string;
  content: string;
}
export const DiaryBox = () => {
  const [diary, setDiary] = useState({
    index: 1,
    img: "/img/DummyPicture.png",
    week: "14주차",
    content:
      "안녕 아가야 ~ 이제 우리 아가가 곧 나오겠구나 우리 쑥쑥이 빨리 보고싶다! 쑥쑥아 근데 밤에 왜이렇게 발로 차는거니 힘이 정말 장사야 엄마 넘 힘들어 좀 살살차봐 ~ 그리고 우리 쑥쑥이 지금 여름인데 수박을 왜이렇게 좋아하니!! 쑥쑥이는 수박이 정말 좋나봐 ㅠㅠ 어쩌구 저쩌구 많을 경우 자를 거임",
  });

  const handleNavi = () => {
    alert(`diary/${diary.index}페이지로 이동`);
  };
  return (
    <div
      css={css`
        padding: ${theme.spacing.md};
        width: 36vw;
        border-radius: 10px;
        border: 1px solid ${theme.palette.gray[500]};
      `}
      onClick={handleNavi}
    >
      <DiaryImg src={diary.img}></DiaryImg>
      <DiaryTitle week={diary.week}></DiaryTitle>
      <DiaryContent content={diary.content}></DiaryContent>
    </div>
  );
};
const DiaryImg = ({ src }: { src: string }) => {
  return (
    <img
      css={css`
        width: 100%;
      `}
      src={src}
    ></img>
  );
};
const DiaryTitle = ({ week }: { week: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: ${theme.spacing.xs} 0;
      `}
    >
      {week}
    </div>
  );
};
const DiaryContent = ({ content }: { content: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: ${theme.spacing.xs} 0 0 0;
        ${theme.typography.body5};
      `}
    >
      {content.length < 130 ? content : content.slice(0, 125) + "..."}
    </div>
  );
};
