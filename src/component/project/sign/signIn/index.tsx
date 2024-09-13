import React, { useState } from "react";
import { ModalSignIn, ModalSignup } from "../../../emotion/Modal";
import { ModalTwoFactor } from "./ModalTwoFactor"; // ModalTwoFactor 컴포넌트 불러오기

export const SignIn: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const [modalTwoFactorOpen, setModalTwoFactorOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const openTwoFactorModal = () => {
    setModalTwoFactorOpen(true);
  };

  return (
    <div>
      <button onClick={openModal}>로그인</button>
      {modalOpen && (
        <ModalSignup
          setModalOpen={setModalOpen}
          openSignInModal={openModal2}
        />
      )}
      <button onClick={openModal2}>회원가입</button>
      {modalOpen2 && (
        <ModalSignIn
          setModalOpen={setModalOpen2}
          openSignupModal={openModal}
          openTwoFactorModal={openTwoFactorModal} // 2차 인증 모달 열기
        />
      )}
      {modalTwoFactorOpen && (
        <ModalTwoFactor setModalOpen={setModalTwoFactorOpen} /> // 2차 인증 모달 표시
      )}
    </div>
  );
};
