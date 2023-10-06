import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  StyledHeader,
  NavMenu,
  RightHeader
} from "./component";

const Header: React.FC = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <StyledHeader>
      <div className="nav_logo">
        <Link to={"/"} className="nav-logo-link">
          MO-ING
        </Link>
      </div>

      <NavMenu isToggleOpen={isToggleOpen}>
        <li>
          <Link to={"/"} className="nav-menu-list">
            산모수첩/일기
          </Link>
        </li>
        <li>
          <Link to={"/"} className="nav-menu-list">
            커뮤니티
          </Link>
        </li>
        <li>
          <Link to={"/"} className="nav-menu-list">
            산모용품
          </Link>
        </li>
        <li>
          <Link to={"/"} className="nav-menu-list">
            조리원신청
          </Link>
        </li>
      </NavMenu>
      <RightHeader>
        <div className="allimBtn">
          <img src="/Img/allim.png" alt="Allim"/>
        </div>
        <Link to="/question" className="questionBtn">
          <img src="/Img/Union (Stroke).png" alt="Question"/>
        </Link>
        <Link to="/search" className="searchBtn">
          <img src="/Img/mainSearch.jpg" alt="Search" />
        </Link>
        <Link to="/mypage" className="mypageBtn">
          <img src="/Img/mainMypage.jpg" alt="Mypage" />
        </Link>
      </RightHeader>
      <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
    </StyledHeader>
  );
};

export default Header;