import axios from "axios";
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
import React, { useEffect, useState } from "react";

export const ModalSignup = ({ setModalOpen, openSignInModal }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const closeModal = () => {
    setModalOpen(false);
  };

  const openSignIn = () => {
    closeModal();
    openSignInModal();
  };
  const handleSignup = async () => {
    try {
      // 사용자가 입력한 정보를 서버로 전송
      const response = await axios.post("/user/sign-up", {
        account: username,
        password,
        email,
        nickname,
        // ... 다른 필요한 정보들도 추가해주세요
      });

      console.log("Signup successful!", response.data);

      // 회원가입 성공 후 추가적인 작업이 있다면 여기에서 처리
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login failed:", error.response?.data);
      }
    }
  };
  return (
    <Overlay closeModal={closeModal}>
      <ModalBack>
        <Modal closeModal={closeModal}>
          <TopContainer>
            <TopSelectContainer
              color="#FF9494"
              fontcolor="white"
              style="border-radius: 25px 0 0 0;"
              onClick={openSignIn}
            >
              로그인
            </TopSelectContainer>
            <TopSelectContainer
              color="white"
              fontcolor="black"
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
              <Images backgroundColor="#FF9494">산모</Images>
              <Images backgroundColor="#84BDFF">보호자</Images>
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const closeModal = () => {
    setModalOpen(false);
  };

  const openSignup = () => {
    closeModal();
    openSignupModal();
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.log("유저 이름" + username + " 비밀번호 " + password);
    axios
      .post(`/user/sign-in?id=${username}&password=${password}`)
      .then((response) => {
        console.log("로그인 성공!");
        console.log("로그인 결과:", response.data.token);
        console.log("유저 정보:", response.data);
      })
      .catch((error) => {
        console.log("Request failed:", error);
        console.log("로그인 에러:", error);
      });
  };
  return (
    <Overlay closeModal={closeModal}>
      <ModalBack>
        <Modal closeModal={closeModal}>
          <TopContainer>
            <TopSelectContainer
              color="white"
              fontcolor="black"
              style="border-radius: 25px 0 0 0;"
            >
              로그인
            </TopSelectContainer>
            <TopSelectContainer
              color="#FF9494"
              fontcolor="white"
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
              <InputContainer
                placeholder="아이디"
                value={username}
                onChange={handleUsernameChange}
              />
              <InputContainer
                placeholder="패스워드"
                value={password}
                onChange={handlePasswordChange}
              />
            </BodyContainer>
            <Rowdiv>
              <CheckButton onClick={handleLogin}>로그인</CheckButton>
            </Rowdiv>
            <LoginButton>카카오 로그인</LoginButton>
          </Modaldiv>
        </Modal>
      </ModalBack>
    </Overlay>
  );
};
