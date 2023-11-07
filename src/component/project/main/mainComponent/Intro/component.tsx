import styled from '@emotion/styled';


export const PageContainer = styled.div`
  background: linear-gradient(180deg, rgba(255, 158, 158, 0.00) 2.13%, rgba(255, 158, 158, 0.09) 21.27%, rgba(255, 158, 158, 0.09) 74.03%, rgba(255, 158, 158, 0.00) 91.77%);
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  margin-left: 211px;
  margin-top: 20px;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 15px;
  margin-left: 100px;
  
`;

export const IntroImgStyle = styled.div`
  display: flex;
  align-items: top; 
  
  .introMsg {
    width: 140.276px;
    height: 140.276px;
    transform: rotate(-16.795deg);
    flex-shrink: 0;
    margin-right: -150px; 
  }

  .introBook {
    width: 405.349px;
    height: 405.349px;
    flex-shrink: 0;
  }
`;

export const IntroTextStyle = styled.text`
h3{
color: #FF9494;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;

}
h4{
color: #000;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
}
p{
color: #FF9494;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 300;
}

`;

export const ButtonContainer = styled.div`
display: flex;
justifyContent: center;
margin-left: 180px;
`;

export const Button = styled.button<{ active: boolean }>`
  width: 291px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 109px;
  background: ${(props) => (props.active ? '#FF9494' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#FF9494')};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px 20px;
  margin: 50px;
  margin-top: 80px;
  border: none;
  cursor: pointer;
`;


export function Content1() {
  return (
    <p>이 버튼은 출산 전 지식을 도와주는 내용입니다.</p>
  );
}

export function Content2() {
  return (
    <>
    <IntroImgStyle>
      <img className="introMsg" src='./img/introMsgImg.png' alt='서비스소개메시지이미지'/>
      <img className="introBook" src='./img/introBookImg.png' alt='서비스소개책이미지'/>
    </IntroImgStyle>
    <IntroTextStyle>
    <h3>02</h3>
    <h4>산모 수첩/일기 공유</h4>
    <h3>산모 수첩 매번 수기로 작성하기 힘드시죠?</h3>
    <p>산모 수첩 수기로 작성하기 힘드시죠? 그리고 공유를 하기 조금 어렵지 않나요? <br/>
      진료 후 바로 업데이트 되는 산모 수첩으로 산모도 의료진도 그리고 보호자도 쉽게 <br/>
      공유 할 수 있는 산모 수첩 공유 및 일기 공유입니다. <br/>
      저희 MOING에서 산모수첩 공유 서비스를 이용해보세요
    </p>
    </IntroTextStyle>

    </>
  );
}

export function Content3() {
  return (
    <p>이 버튼은 출산 후 케어에 관한 내용입니다.</p>
  );
}
