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

export const StyledQABox = styled.div`
  width: 600px;
  height: 300px;
  border: 0.5px solid #929292;
  border-radius: 30px;
  padding: 30px;
  text-align: center;

  h3 {
    color: #808080;
    font-family: 'Inter';
    font-size: 23px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0; // Remove margin for the h3 element
  }

  p {
    color: #000;
    font-family: 'Inter';
    font-size: 18px; 
    font-weight: normal; 
    line-height: 1.5; 
    text-align: left;
    &.boldText {
      font-weight: bold;
  }
}
`;

 /* 여기에 axios.get으로 주차별 문답 내용 나오게 할 예정 */
export const QABox = () => {
  return (
    <StyledQABox> 
        <h3>01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?</h3>
        <p className="boldText">쑥쑥이엄마</p>
        <p>ㅋㅋ 너무 떨려서 죽는줄 알았다 진짜 너무 떨렸음 너무 떨려서 무서워서 미치는줄 혼자 병원에 갔는 진짜 맞다고해서 기절초풍</p>
        <p className="boldText">쑥쑥이아빠</p>
        <p>처음 들었을때 바로 반응을 했었어야했는데 너무 놀라서 그냥 가만히 있었음 아니다 한 5초 정지하고 환호했다.. 흐어 진짜 놀랬잖아!!! 그래도 쑥쑥이가 우리에게 와줘서 너무 행복해</p>
    </StyledQABox>
    
  );
};
