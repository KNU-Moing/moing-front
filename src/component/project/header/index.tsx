import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { StyledHeader, LeftHeader, NavMenu, RightHeader } from "./component";

const Header: React.FC = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <StyledHeader>
      <LeftHeader />
      <NavMenu isToggleOpen={isToggleOpen} />
      <RightHeader />
      <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
    </StyledHeader>
  );
};

export default Header;
