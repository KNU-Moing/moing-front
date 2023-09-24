import React, { useState } from "react";
import ModalBasic from "../../../emotion/ModalBasic";

export const SignIn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <button onClick={showModal}>모달 띄우기</button>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </div>
  );
};
