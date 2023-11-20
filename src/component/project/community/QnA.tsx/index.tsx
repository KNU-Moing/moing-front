import { useEffect, useState } from "react";
import StyledHeader from "../../header";
import theme from "../../../../styles/theme";
import Footer from "../../Footer";
import { Overlay } from "../component";
import { BackButton } from "../../../emotion/component";

export const QnA = () => {
  return (
    <div>
      <StyledHeader></StyledHeader>
      <Overlay>
        <BackButton></BackButton>
      </Overlay>
      <Footer></Footer>
    </div>
  );
};
