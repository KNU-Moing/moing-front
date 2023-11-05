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
  top: 53px;

  .nav_logo {
    position: relative;
    left: 122px;
  }

  .menuToggleBtn {
    display: none;
    color: #000;
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
`;

const StyledNavMenu = styled.ul<NavMenuProps>`
  list-style: none;
  display: flex;
  position: absolute;
  left: 300px;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  li {
    margin-right: 89px;
    &:hover {
      cursor: pointer;
      background: rgba(255, 242, 242, 0.50);
      border-radius: 4px;
    }
  }

  .nav-menu-list {
    text-decoration: none;
    color: #000;
    display: block;
    padding: 10px 10px;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
      width: 13px;
      height: 14px;

    }
  }
`;
const Modal = styled.div`
  background: white;
  width: 305.35px;
  height: 457.805px;
  border: 2px solid #FFE2E2;
  border-radius: 17px; 
  top: 440px;
  right: 20px;
  transform: translate(15%, 55%);
  padding: 20px;
`;


const LeftHeader = () => {
  return (
    <StyledLeftHeader>
      <Link to={"/"} className="nav-logo-link">
        <img src='./img/headerLogo.png'alt='헤더로고'/>
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
  const [isModalOpen, setIsModalOpen] = useState(false); // useState를 RightHeader 컴포넌트 내에서 선언

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // 모달 열림/닫힘 상태를 토글합니다.
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
          fontSize: '25px', 
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
