import styled from "@emotion/styled";

// 타입 선언
type NavMenuProps = {
    isToggleOpen: boolean;
  };
  
export const StyledHeader = styled.header`
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 73px; /* 헤더의 top을 73px로 설정 */

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

export const NavMenu = styled.ul<NavMenuProps>`
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

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px; /* 오른쪽 헤더와 메뉴 간의 간격 조정 */
  position: absolute;
  right: 131px;

  .searchBtn,
  .mypageBtn,
  .questionBtn,
  .allimBtn {
    margin-left: 28px; /* 이미지 간격을 28px로 설정 */
    cursor: pointer;

    img {
      width: auto; /* 가로 크기 자동으로 조정 */
      height: 16px; /* 이미지 높이 고정 */
    }
  }
`;

export const NavLogo = styled.div`
`;