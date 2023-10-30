import React, { useState, ChangeEvent } from "react";
import { StyledInput, StyledButton, StyledQuestionContainer, ContainerDiv, QABox } from "./component";
import { LeftHeader, RightHeader, StyledHeader } from "../header/component";
import { BackButton } from "../../emotion/component";
import Modal from 'react-modal';

export const Question = () => {
  const [questionText, setQuestionText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    handleOpenModal();
  };

  return (
    <>
      <StyledHeader>
        <LeftHeader />
        <RightHeader />
      </StyledHeader>
      <BackButton />
      <ContainerDiv>
        <div>
          <h2>이번주 질문</h2>
          <p>
            오늘은 날이 화창하네요 쑥쑥이 엄마가 오늘 낮에 먹고 싶었던 음식은 무엇인가요?
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
          <QABox/>
          <QABox/>
          <QABox/>
          <QABox/>
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
        <button onClick={handleCloseModal}>확인</button>
      </Modal>
    </>
  );
};
