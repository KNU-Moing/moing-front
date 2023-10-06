import React, { useState, ChangeEvent } from 'react';
import Header from '../header';
import {
  StyledInput,
  StyledButton,
  StyledQuestionContainer,
  QABox,
  ContainerDiv,
} from "./component";

export const Question = () => {
  const [questionText, setQuestionText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionText(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(questionText);
  };

  return (
    <>
      <Header />
      <ContainerDiv>
        <div>
          <h2>오늘의 질문</h2>
          <p>오늘은 날이 화창하네요 쑥쑥이 엄마가 오늘 낮에 먹고 싶었던 음식은 무엇인가요?</p>
        </div>
        <div>
          <StyledInput
            type="text"
            value={questionText}
            onChange={handleTextChange}
            placeholder="당신의 답을 적어주세요 :)"
          />
        </div>
        <div>
          <StyledButton onClick={handleSubmit}>
            작성 완료
          </StyledButton>
        </div>
        <StyledQuestionContainer>
          <QABox />
          <QABox />
          <QABox />
          <QABox />
        </StyledQuestionContainer>
      </ContainerDiv>
    </>
  );
};
