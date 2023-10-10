import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// 타입 선언
type NavMenuProps = {
  isToggleOpen: boolean;
};

const StyledHeader = styled.header`
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 73px;

  .nav_logo {
    position: relative;
    left: 122px;
    font-size: 30px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #808080;

    .nav-logo-link {
      text-decoration: none;
      color: #808080;
    }
  }

  .menuToggleBtn {
    display: none;
    color: #808080;
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .menuToggleBtn {
      display: block;
    }
  }
`;

const StyledLeftHeader = styled.div`
  position: relative;
  left: 122px;
  font-size: 30px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #808080;
  .nav-logo-link {
    text-decoration: none;
    color: #808080;
  }
`;

const StyledNavMenu = styled.ul<NavMenuProps>`
  list-style: none;
  display: flex;
  position: absolute;
  left: 400px;
  color: #808080;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  li {
    margin-right: 89px;
    &:hover {
      cursor: pointer;
      background: #f2f2f2;
      border-radius: 4px;
    }
  }

  .nav-menu-list {
    text-decoration: none;
    color: #808080;
    display: block;
    padding: 10px 10px;
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    color: #808080;
    align-items: center;
    width: 100%;
    margin-top: 5px;

    li {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

const StyledRightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  right: 131px;

  .header-button {
    margin-left: 28px;
    cursor: pointer;

    img {
      width: auto;
      height: 16px;
    }
  }
`;

const LeftHeader = () => {
  return (
    <StyledLeftHeader>
      <Link to={"/"} className="nav-logo-link">
        MO-ING
      </Link>
    </StyledLeftHeader>
  );
};

const NavMenu = ({ isToggleOpen }: NavMenuProps) => {
  return (
    <StyledNavMenu isToggleOpen={isToggleOpen}>
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
    </StyledNavMenu>
  );
};

const RightHeader = () => {
  return (
    <StyledRightHeader>
      <div className="header-button">
        <img src="/Img/allim.png" alt="Allim" />
      </div>
      <Link to="/question" className="header-button">
        <img src="/Img/Union (Stroke).png" alt="Question" />
      </Link>
      <Link to="/search" className="header-button">
        <img src="/Img/mainSearch.jpg" alt="Search" />
      </Link>
      <Link to="/mypage" className="header-button">
        <img src="/Img/mainMypage.jpg" alt="Mypage" />
      </Link>
    </StyledRightHeader>
  );
};

export { StyledHeader, LeftHeader, NavMenu, RightHeader };