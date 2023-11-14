import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { StyledInput, StyledButton, StyledQuestionContainer, ContainerDiv, QABox, StyledQABox } from "./component";
import { LeftHeader, NavMenu, RightHeader, StyledHeader } from "../../header/component";
import { BackButton } from "../../../emotion/component";
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 가져옴


export const Question = () => {
  const [questionText, setQuestionText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputList, setInputList] = useState<string[]>([]); // 새로운 입력란을 관리할 배열

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionText(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (questionText.trim() !== "") { // 입력 내용이 공백이 아닌 경우에만 처리
      setInputList([...inputList, questionText]); // 새로운 입력 내용을 배열에 추가
      setQuestionText(""); // 입력 내용을 초기화
      handleOpenModal();
    }
  };

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 라우팅을 관리

  const handleConfirmation = async () => {
    handleCloseModal();
  
    try {
      const postData = {
        data: 'your_data_here',
      };
  
      const response = await axios.post('/Comment', postData);
  
      console.log('Server response:', response.data);
  
      navigate('/question/confirm');
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Axios error details:', error.response);
          console.error('Status:', error.response.status);
          console.error('Message:', error.response.data);
        } else {
          console.error('No response received from the server:', error.request);
        }
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };
  
  
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <>
      <StyledHeader>
        <LeftHeader />
        <NavMenu isToggleOpen={isToggleOpen} />
        <RightHeader />
      </StyledHeader>
      <BackButton />
      <ContainerDiv>
        <div>
          <h2 style={{
            fontSize: '25px',
            textAlign: 'center',
            fontFamily: 'Pretendard Variable',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '50px'
            }}>오늘의 질문</h2>
          <p style={{
            fontSize: '20px',
            textAlign: 'center',
            fontFamily: 'Pretendard Variable',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>
            오늘은 날이 화창하네요<br/>
            쑥쑥이 엄마가 오늘 낮에 먹고 싶었던 음식은 무엇인가요?
          </p>
        </div>
        <div>
          <StyledInput
            type="text"
            value={questionText}
            onChange={handleTextChange}
            placeholder="  당신의 답을 적어주세요 :)"
          />
        </div>
        <div>
          <StyledButton onClick={handleSubmit}>작성 완료</StyledButton>
        </div>
        <StyledQuestionContainer>
          {inputList.map((text, index) => (
            <StyledInput
              key={index}
              type="text"
              value={text}
              readOnly
            />
          ))}
        </StyledQuestionContainer>
      </ContainerDiv>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        style={{
          content: {
            width: "400px",
            height: "100px",
            borderRadius: "40px",
            top: "40%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            textAlign: "center",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <p>작성한 내용 저장 완료!</p>
        <button onClick={handleConfirmation}>확인</button>
      </Modal>
      <QABox/>
    </>
  );
};
