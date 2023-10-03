import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items:  left; /* Updated to center vertically */
  height: 100vh;
`;

export const ConsiderBoxItem = styled.div`
  width: 951px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 30px;
`;
