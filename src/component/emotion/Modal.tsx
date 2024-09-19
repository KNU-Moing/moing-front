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
  const [phoneNumber, setphoneNumber] = useState("");
  const [pregnancyDate, setpregnancyDate] = useState("");
  const [birthday, setbirthday] = useState("");
 
  const closeModal = () => {
    setModalOpen(false);
  };

  const openSignIn = () => {
    
    closeModal();
    openSignInModal();
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handlephoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setphoneNumber(e.target.value);
  };
  const handlesetbirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbirthday(e.target.value);
  };
  const handlepregnancyDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpregnancyDate(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/user/sign-up", null, {
        params: {
          account: username,
          birthday: birthday,
          email: email,
          nickname: nickname,
          password: password,
          phoneNumber: phoneNumber,
          pregnancyDate: pregnancyDate,
          role: "admin",
          username: nickname,
        },
      });

      console.log("회원가입 성공");
      console.log("유저 정보:", response.data);
    } catch (error: any) {
      console.error("Request failed:", error);
      console.error("로그인 에러:", error);

      if (error.response) {
        console.error("서버 응답 데이터:", error.response.data);
        console.error("서버 응답 상태 코드:", error.response.status);
        console.error("서버 응답 헤더:", error.response.headers);
        openSignIn();
      } else if (error.request) {
        console.error("서버 응답 없음");
      } else {
        console.error("오류 메시지:", error.message);
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
                value={username}
                onChange={handleUsernameChange}
              />
              <InputContainer
                placeholder="패스워드"
                value={password}
                onChange={handlePasswordChange}
              />
            </BodyContainer>
            <BodyContainer>
              정보 입력
              <InputSelectContainer
                placeholder="이메일"
                buttonholder="인증하기"
                value={email}
                onChange={handleEmailChange}
              />
              <InputContainer
                placeholder="닉네임"
                value={nickname}
                onChange={handleNicknameChange}
              />
              <InputContainer
                placeholder="핸드폰 번호"
                value={phoneNumber}
                onChange={handlephoneNumberChange}
              />
              <InputContainer
                placeholder="임신일"
                value={pregnancyDate}
                onChange={handlepregnancyDateChange}
              />
              <InputContainer
                placeholder="생년월일"
                value={birthday}
                onChange={handlesetbirthdayChange}
              />
            </BodyContainer>
            <Rowdiv>
              <CheckButton onClick={handleSignUp}>가입하기</CheckButton>
            </Rowdiv>
          </Modaldiv>
        </Modal>
      </ModalBack>
    </Overlay>
  );
};

// 2차 인증 UI 컴포넌트 (추가)
export const TwoFactorAuth: React.FC = ({ onClose }: any) => {
  const [authOption, setAuthOption] = useState("");
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("");
  const [appId, setAppId] = useState("");

  const handleSendCode = async () => {
    try {
      // 여기에 실제 코드 전송 로직을 넣어주세요 (예: SMS, 이메일 인증)
      await axios.post("/send-auth-code", { userId, appId, authOption });
      console.log("코드 전송 성공");
    } catch (error) {
      console.error("코드 전송 실패:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      // 여기에 인증 코드 검증 로직을 넣어주세요
      await axios.post("/verify-code", { code, userId, appId });
      console.log("코드 검증 성공");
      onClose(); // 인증 성공 후 모달 닫기
    } catch (error) {
      console.error("코드 검증 실패:", error);
    }
  };

  return (
    <div>
      <h2>2차 인증</h2>
      <input
        placeholder="사용자 아이디"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        placeholder="애플리케이션 아이디"
        value={appId}
        onChange={(e) => setAppId(e.target.value)}
      />
      <select value={authOption} onChange={(e) => setAuthOption(e.target.value)}>
        <option value="">인증 옵션 선택</option>
        <option value="sms">SMS 인증</option>
        <option value="email">Email 인증</option>
        <option value="sec-key-fido">FIDO 보안키 인증</option>
      </select>
      <button onClick={handleSendCode}>코드 보내기</button>
      <input
        placeholder="인증 코드를 입력하세요"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleVerifyCode}>코드 검증</button>
    </div>
  );
};


export const ModalSignIn = ({ setModalOpen, openSignupModal }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isTwoFactorVisible, setIsTwoFactorVisible] = useState(false); // 2차 인증 UI 표시 여부

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
        setIsTwoFactorVisible(true);
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
          {isTwoFactorVisible ? (
            // 2차 인증 UI
            <TwoFactorAuth onClose={closeModal} />
          ) : (
            <div>
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
                <LoginButton onClick={() => setIsTwoFactorVisible(true)}>2차 인증 로그인</LoginButton> 
              </Modaldiv>
            </div>
          )}
        </Modal>
      </ModalBack>
    </Overlay>
  );
};
