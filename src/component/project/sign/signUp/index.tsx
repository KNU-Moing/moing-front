import React, { useState } from "react";
import Modal from "react-modal";
import '../../../../index.css';


import styled from '@emotion/styled'; // styled import 구문은 여기 있어야 합니다.
import {
  BodyContainer,
  CheckButton,
  Images,
  InputContainer,
  InputSelectContainer,
  Modaldiv,
  Rowdiv,
  TopContainer,
  TopSelectContainer,
} from "../../../emotion/component";

// LoginButton 정의는 import 구문 바깥에서 해야 합니다.
export const LoginButton = styled.button`
  background-color: #FF9494;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #FF7373;
  }
`;

export const SignUp: React.FC = () => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "0px solid black",
    },
  };

  

  // 2차 인증 모달 컴포넌트
  const ModalTwoFactor: React.FC<{
    isOpen: boolean;
    closeModal: () => void;
  }> = ({ isOpen, closeModal }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="2차 인증 모달"
        shouldCloseOnOverlayClick={true}
      >
        <div id="container">
          <div id="input-wrapper">
            <div id="user-options">
              <input id="user-id" placeholder="사용자 아이디" />
              <input id="application-id" placeholder="애플리케이션 아이디" />
              <select id="auth-option">
                <option value="" disabled selected>
                  인증 옵션 선택
                </option>
                <option value="sms">SMS 인증</option>
                <option value="email">Email 인증</option>
                <option value="sec-key-fido">FIDO 보안키 인증</option>
                <option value="pc-fido">PC 생체 인증</option>
                <option value="mob-fido">모바일 생체 인증</option>
                <option value="mob-otp">OTP 인증</option>
              </select>
            </div>
            <div id="code-container" className="hide">
              <input id="code" placeholder="인증 코드를 입력하세요" />
              <button id="verify-code">코드 보내기</button>
            </div>
            <div id="mobile-device-container"></div>
            <div id="result-container" className="hide">
              <p id="result"></p>
            </div>
            <div id="btn-container" className="flex">
              <button id="reset" className="hide">
                초기화
              </button>
              <button id="authenticate">인증</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  // 회원가입 모달 컴포넌트
  const ModalSignup: React.FC<{
    isOpen: boolean;
    closeModal: () => void;
  }> = ({ isOpen, closeModal }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="회원가입 모달"
        shouldCloseOnOverlayClick={true}
      >
        <TopContainer>
          <TopSelectContainer
            color="#FF9494"
            fontcolor="black"
            style="border-radius: 25px 0 0 0;"
          >
            로그인
          </TopSelectContainer>
          <TopSelectContainer
            color="#cacaca"
            fontcolor="white"
            style="border-radius: 0 25px 0 0;"
          >
            회원가입
          </TopSelectContainer>
        </TopContainer>
        <Modaldiv>
          <BodyContainer>
            ID/PW
            <InputContainer placeholder="아이디" />
            <InputContainer placeholder="패스워드" />
          </BodyContainer>
          <Rowdiv>
            <CheckButton>로그인</CheckButton>
          </Rowdiv>
          <LoginButton>카카오 로그인인</LoginButton>
          <LoginButton onClick = {openTwoFactorModal}>2차 로그인</LoginButton>
          <LoginButton>로그인 버튼 임시</LoginButton>
        </Modaldiv>
      </Modal>
    );
  };

  // 로그인 모달 컴포넌트
  const ModalSignIn: React.FC<{
    isOpen: boolean;
    closeModal: () => void;
  }> = ({ isOpen, closeModal }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="로그인 모달"
        shouldCloseOnOverlayClick={true}
      >
        <TopContainer>
          <TopSelectContainer
            color="#FF9494"
            fontcolor="white"
            style="border-radius: 25px 0 0 0;"
          >
            로그인
          </TopSelectContainer>
          <TopSelectContainer
            color="#F4F4F4"
            fontcolor="black"
            style="border-radius: 0 25px 0 0;"
          >
            회원가입
          </TopSelectContainer>
        </TopContainer>
        <Modaldiv>
          <BodyContainer>
            ID/PW
            <InputSelectContainer
              placeholder="아이디"
              buttonholder="중복 확인"
            />
            <InputContainer placeholder="패스워드" />
          </BodyContainer>
          <BodyContainer>
            정보 입력
            <InputSelectContainer
              placeholder="이메일"
              buttonholder="인증하기"
            />
            <InputSelectContainer
              placeholder="인증번호"
              buttonholder="인증하기"
            />
            <InputContainer placeholder="닉네임" />
          </BodyContainer>
          <Rowdiv>
            <Images backgroundColor="#FF9494">산모</Images>
            <Images backgroundColor="#84BDFF">보호자</Images>
          </Rowdiv>
          <Rowdiv>
            <CheckButton>가입하기</CheckButton>
          </Rowdiv>
        </Modaldiv>
      </Modal>
    );
  };

  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isTwoFactorModalOpen, setTwoFactorModalOpen] = useState(false); // 2차 로그인 모달 상태

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const openTwoFactorModal = () => {
    setTwoFactorModalOpen(true);
  };

  const closeTwoFactorModal = () => {
    setTwoFactorModalOpen(false);
  };

  return (
    <div>
      <button onClick={openSignupModal}>회원가입 모달 열기</button>
      <button onClick={openSignInModal}>로그인 모달 열기</button>
      <ModalSignup isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
      <ModalSignIn isOpen={isSignInModalOpen} closeModal={closeSignInModal} />
      <ModalTwoFactor isOpen={isTwoFactorModalOpen} closeModal={closeTwoFactorModal} />
    </div>
  );
  
};
