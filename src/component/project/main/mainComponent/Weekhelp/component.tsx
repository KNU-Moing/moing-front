import styled from '@emotion/styled';


export const WeekhelpComponent = styled.div`
`
export const WeekhelpText = styled.text`
position: relative; 
top: 100px;
width: 100%;
.weekhelpH1{
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.weekhelpP{
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 0px */
letter-spacing: 0.5px;

.weekhelpSmallLogo{
    width: 88.916px;
    height: 21.433px;
    flex-shrink: 0;
}
}
`

export const WeekhelpRoundContainer = styled.div`
  display: flex;
  flex-direction: row; /* 요소들을 가로로 나란히 배치 */
  align-items: center; /* 세로 가운데 정렬 */
  margin-top: 200px; /* 원하는 간격 설정 */
  margin-left: 12%;
}
  `;

export const WeekhelpRound = styled.div`
width: 300px;
height: 300px;
flex-shrink: 0;
border-radius: 300px;
background: #FF9494;
display: flex;
justify-content: center; /* 가로 정렬 중앙 */
align-items: center; /* 세로 정렬 중앙 */
position: relative;
margin: 0 40px; /* 좌우 간격을 25px로 설정 */
transition: transform 0.3s; /* 변환을 부드럽게 만듭니다. */

  &:hover {
    transform: scale(1.05); /* 1.05배 확대 */
  }

.emotion-img01{
  width: 94.776px;
  height: 132.297px;
  flex-shrink: 0;
}
.emotion-img02{
  width: 120.749px;
  height: 148.845px;
  flex-shrink: 0;
}
.emotion-img03{
  width: 95.094px;
  height: 172.642px;
  flex-shrink: 0;
}
.WeekhelpRoundText {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center; /* 텍스트를 가운데 정렬 */
  color: #fff; /* 텍스트 색상 설정 (선택사항) */
  padding: 5px; /* 텍스트 주변에 간격 추가 (선택사항) */
}
`