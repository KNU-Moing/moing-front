import React, { useState } from "react";
import { ModalSignIn, ModalSignup } from "../../../emotion/Modal";
export const SignIn = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  // 모달 열기 함수
  const openModal = () => {
    setModalOpen(true);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  return (
    <div>
      <button onClick={openModal}>모달 띄우기</button>
      {modalOpen && (
        <ModalSignup
          setModalOpen={setModalOpen}
          openSignInModal={openModal2} // ModalSignup에서 ModalSignIn을 열기 위한 함수 전달
        />
      )}
      <button onClick={openModal2}>모달 띄우기</button>
      {modalOpen2 && (
        <ModalSignIn
          setModalOpen={setModalOpen2}
          openSignupModal={openModal} // ModalSignIn에서 ModalSignup을 열기 위한 함수 전달
        />
      )}
    </div>
  );
};
