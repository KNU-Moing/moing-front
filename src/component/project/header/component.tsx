import React, { useState } from 'react';
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
  top: 3.3125rem; 

  .nav_logo {
    position: relative;
    left: 7.625rem;
  }

  .menuToggleBtn {
    display: none;
    color: #000;
    font-size: 0.9375rem;
    position: absolute;
    right: 1.25rem; 
    top: 0.9375rem;
    cursor: pointer;
  }

  @media screen and (max-width: 48rem) { 
    flex-direction: column;
    align-items: flex-start;

    .menuToggleBtn {
      display: block;
    }
  }
`;

const StyledLeftHeader = styled.div`
  position: relative;
  left: 7.625rem; 
`;

const StyledNavMenu = styled.ul<NavMenuProps>`
  list-style: none;
  display: flex;
  position: absolute;
  left: 18.75rem;
  color: #000;
  font-family: Inter;
  font-size: 1rem; 
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  li {
    margin-right: 5.5625rem; 
    &:hover {
      cursor: pointer;
      background: rgba(255, 242, 242, 0.50);
      border-radius: 0.25rem;
    }
  }

  .nav-menu-list {
    text-decoration: none;
    color: #000;
    display: block;
    padding: 0.625rem 0.625rem; 
    font-family: Pretendard;
    font-size: 0.9375rem; 
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media screen and (max-width: 48rem) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    color: #808080;
    align-items: center;
    width: 100%;
    margin-top: 0.3125rem; 

    li {
      margin-right: 0;
      margin-bottom: 0.625rem; 
    }
  }
`;

const StyledRightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.625rem; 
  position: absolute;
  right: 8.1875rem;

  .header-button {
    margin-left: 1.75rem; 
    cursor: pointer;

    img {
      width: 0.8125rem; 
      height: 0.875rem; 
    }
  }
`;

const Modal = styled.div`
  background: white;
  width: 19.0844rem; 
  height: 28.6128rem; 
  border: 0.125rem solid #FFE2E2; 
  border-radius: 1.0625rem;
  top: 27.5rem; 
  right: 1.25rem; 
  transform: translate(15%, 55%);
  padding: 1.25rem; 
`;

const LeftHeader = () => {
  return (
    <StyledLeftHeader>
      <Link to={"/"} className="nav-logo-link">
        <img src='./img/headerLogo.png' alt='헤더로고'/>
      </Link>
    </StyledLeftHeader>
  );
};

const NavMenu = ({ isToggleOpen }: NavMenuProps) => {
  return (
    <StyledNavMenu isToggleOpen={isToggleOpen}>
      <li>
        <Link to={"/notebook"} className="nav-menu-list">
          산모수첩/일기
        </Link>
      </li>
      <li>
        <Link to={"/community"} className="nav-menu-list">
          커뮤니티
        </Link>
      </li>
      <li>
        <Link to={"/"} className="nav-menu-list">
          산모용품
        </Link>
      </li>
      <li>
        <Link to={"/cook"} className="nav-menu-list">
          조리원신청
        </Link>
      </li>
    </StyledNavMenu>
  );
};

const RightHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <StyledRightHeader>
      <div className="header-button" onClick={toggleModal}>
        <img src="./img/allim.png" alt="Allim" />
        {isModalOpen && (
        <Modal className="modal">
          {/* 모달 내용 */}
          <h1 style={{
          color: '#000',
          fontFamily: 'Pretendard', 
          fontSize: '1.5625rem', 
          fontStyle: 'normal', 
          fontWeight: 500,
          lineHeight: 'normal' 
          }}>알림</h1>
        </Modal>
        )}
      </div>
      <Link to="/question" className="header-button">
        <img src="./img/mainQApage.png" alt="Question" />
      </Link>
      <Link to="/search" className="header-button">
        <img src="./img/mainSearch.png" alt="Search" />
      </Link>
      <Link to="/mypage" className="header-button">
        <img src="./img/mainMypage.png" alt="Mypage" />
      </Link>
    </StyledRightHeader>
  );
};

export { StyledHeader, LeftHeader, NavMenu, RightHeader };
