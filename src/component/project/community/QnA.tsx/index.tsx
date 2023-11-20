import { useEffect, useState } from "react";
import StyledHeader from "../../header";
import theme from "../../../../styles/theme";
import Footer from "../../Footer";
import { Overlay } from "../component";

export const QnA = () => {
  return (
    <div>
      <StyledHeader></StyledHeader>
      <Overlay>" "</Overlay>
      <Footer></Footer>
    </div>
  );
};
