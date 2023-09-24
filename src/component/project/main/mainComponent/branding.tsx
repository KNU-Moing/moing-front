import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Text1 = styled.p`
  position: absolute;
  left: 310px;
  top: 449px;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: #808080;
`;
const Text2 = styled.p`
  position: absolute;
  left: 310px;
  top: 415px;
  font-family: Inter;
  font-size: 100px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: #808080;
`;

const customDivStyle: React.CSSProperties = {
  width: '382px',
  height: '68px',
  position: 'absolute',
  left: '310px',
  top: '634px',
  border: '1px solid #a5a5a5',
  borderRadius: '87px',
  fontSize: '25px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#808080',
  marginTop: '28px',
};

const roundedDivStyle: React.CSSProperties = {
  position: "absolute",
  right: "594px",
  top: "282px",
  width: "334px",
  height: "334px",
  backgroundColor: "#D9D9D9",
  borderRadius: "50%",
};

const rightBottomDivStyle: React.CSSProperties = {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "821px",
    height: "821px",
    backgroundColor: "#D9D9D9",
    borderRadius: "50%",
}

const Branding: React.FC = () => {
  return (
    <div>
      <Text1>같이의 가치</Text1>
      <Text2>MO-ING</Text2>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button style={customDivStyle}>
          로그인/회원가입
        </button>
      </Link>
      <div style={roundedDivStyle}></div>
      <div style={rightBottomDivStyle}></div>
    </div>
  );
};

export default Branding;
