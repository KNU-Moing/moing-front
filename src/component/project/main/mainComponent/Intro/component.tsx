import styled from '@emotion/styled';

export const Button = styled.button<{ active: boolean }>`
  width: 391px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 109px;
  background: ${(props) => (props.active ? '#9C9C9C' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#808080')};
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  position: relative;
`;

export const HeaderContainer = styled.div`
  text-align: left;
  margin-left: 211px;
  margin-top: 100px;
  align-self: flex-start;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;
