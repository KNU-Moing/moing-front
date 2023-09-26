import {
  BodyContainer,
  CheckButton,
  Images,
  Images2,
  InputContainer,
  InputSelectContainer,
  LoginButton,
  Modal,
  ModalBack,
  Modaldiv,
  Overlay,
  Rowdiv,
  TopContainer,
  TopSelectContainer,
} from "./component";
import React, { useEffect } from "react";

export const ModalSignup = ({ setModalOpen, openSignInModal }: any) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const openSignIn = () => {
    closeModal();
    openSignInModal();
  };

  return (
    <Overlay closeModal={closeModal}>
      <ModalBack>
        <Modal closeModal={closeModal}>
          <TopContainer>
            <TopSelectContainer
              color="#CACACA"
              style="border-radius: 25px 0 0 0;"
              onClick={openSignIn}
            >
              로그인
            </TopSelectContainer>
            <TopSelectContainer
              color="#F4F4F4"
              style="border-radius: 0 25px 0 0;"
            >
              회원가입
            </TopSelectContainer>
          </TopContainer>
          <Modaldiv>
            {/* <button onClick={closeModal}>X</button> */}
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
              <Images>산모</Images>
              <Images>보호자</Images>
            </Rowdiv>
            <Rowdiv>
              <CheckButton>가입하기</CheckButton>
            </Rowdiv>
          </Modaldiv>
        </Modal>
      </ModalBack>
    </Overlay>
  );
};

export const ModalSignIn = ({ setModalOpen, openSignupModal }: any) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const openSignup = () => {
    closeModal();
    openSignupModal();
  };
  return (
    <Overlay closeModal={closeModal}>
      <ModalBack>
        <Modal closeModal={closeModal}>
          <TopContainer>
            <TopSelectContainer
              color="#F4F4F4"
              style="border-radius: 25px 0 0 0;"
            >
              로그인
            </TopSelectContainer>
            <TopSelectContainer
              color="#cacaca"
              style="border-radius: 0 25px 0 0;"
              onClick={openSignup}
            >
              회원가입
            </TopSelectContainer>
          </TopContainer>
          <Modaldiv>
            {/* <button onClick={closeModal}>X</button> */}
            <BodyContainer>
              ID/PW
              <InputContainer placeholder="아이디" />
              <InputContainer placeholder="패스워드" />
            </BodyContainer>
            <Rowdiv>
              <CheckButton>로그인</CheckButton>
            </Rowdiv>
            <LoginButton>카카오 로그인</LoginButton>
          </Modaldiv>
        </Modal>
      </ModalBack>
    </Overlay>
  );
};
