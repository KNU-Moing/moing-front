import React from 'react';

interface ModalTwoFactorProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalTwoFactor: React.FC<ModalTwoFactorProps> = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false); // 모달 닫기
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>2차 인증</h2>
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
              <input id="code" placeholder="인증 코드 입력" />
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
      </div>
    </div>
  );
};
