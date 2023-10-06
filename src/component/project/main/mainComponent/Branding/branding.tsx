import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Text1,
  Text2,
  CustomButton,
  RoundedDiv,
  RightBottomDiv,
} from "./component";
import { ModalSignIn, ModalSignup } from "../../../../emotion/Modal";
import Header from "../../../header";

const Branding: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };
  return (
    <div>
      <div>
        <Header/>
      </div>
      <Text1>같이의 가치</Text1>
      <Text2>MO-ING</Text2>
      <CustomButton onClick={openModal}>로그인/회원가입</CustomButton>
      {modalOpen && (
        <ModalSignup setModalOpen={setModalOpen} openSignInModal={openModal2} />
      )}
      {modalOpen2 && (
        <ModalSignIn setModalOpen={setModalOpen2} openSignupModal={openModal} />
      )}
    </div>
  );
};

export default Branding;
