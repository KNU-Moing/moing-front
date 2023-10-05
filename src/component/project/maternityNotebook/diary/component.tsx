import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TitleBar = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      padding: ${theme.spacing.sm} 0;
      color: ${theme.palette.gray[600]};
      ${theme.typography.body4Bold};
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

export const TitleContent = () => {
  return (
    <div
      css={css`
        flex-grow: 8;
      `}
    >
      예비 엄마와 아이의 일기장
    </div>
  );
};

export const SortSelect = ({
  setState,
  selected,
  sortList,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  sortList: string[];
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };
  return (
    <select onChange={handleSelect} value={selected}>
      {sortList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export const DiaryOverlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      padding: ${theme.spacing.sm} 0;
      color: ${theme.palette.gray[600]};
      flex-wrap: wrap;
      ${theme.typography.body4Bold};
    `}
  >
    {children}
  </div>
);

export const DiaryBox = () => {
  return;
};
