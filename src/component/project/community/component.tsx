import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding-top: 18vh;
      padding-left: 8vw;
    `}
  >
    {children}
  </div>
);
export const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      margin-top: -${theme.spacing.xxl};
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
      color: ${theme.palette.gray[700]};
      padding: 1vh 5vw;
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
