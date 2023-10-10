import styled from "@emotion/styled";


export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 200px;
`;

export const StyledInput = styled.input`
  width: 1000px;
  height: 100px;
  border-radius: 40px;
  border: none;
  background: #F3F3F3;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 40px;
  border: none;
  background: #F3F3F3;
  margin-top: 10px;
  cursor: pointer; 
`;

export const StyledQuestionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px; 
  align-items: center; 
  justify-content: center;
  margin-top: 200px;
`;

export const StyledQuestionText = styled.h3`
  color: #808080;
  font-family: 'Inter';
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledQABox = styled.div`
  width: 623px;
  height: 310px;
  border: 0.5px solid #929292; /* Add border to QABox */
  border-radius: 30px;
  padding: 10px;
  text-align: center;
`;

export const QABox = () => {
  return (
    <StyledQABox>
      <StyledQuestionText>
        01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?
      </StyledQuestionText>
    </StyledQABox>
  );
};
