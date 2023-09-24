import {
  Button,
  Images,
  Images1,
  Images2,
  Inputs,
  ModalBack,
  Modaldiv,
  Overlay,
  Rowdiv,
  Rowdiv2,
} from "./component";

function ModalBasic({ setModalOpen }: any) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Overlay>
      <ModalBack>
        <Rowdiv2>
          <Images1>산모</Images1>
          <Images2>보호자</Images2>
        </Rowdiv2>
        <Modaldiv>
          <button onClick={closeModal}>X</button>
          ID/PW
          <Inputs>아이디</Inputs>
          <Inputs>비밀번호</Inputs>
          정보 입력
          <Inputs>이메일</Inputs>
          <Inputs>인증번호</Inputs>
          <Inputs>닉네임</Inputs>
          <Rowdiv>
            <Images>산모</Images>
            <Images>보호자</Images>
          </Rowdiv>
          <Rowdiv>
            <Button>가입하기</Button>
          </Rowdiv>
        </Modaldiv>
      </ModalBack>
    </Overlay>
  );
}
export default ModalBasic;
