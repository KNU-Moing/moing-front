import React from "react";
import { Link } from "react-router-dom";
import { Text1, Text2, CustomButton, RoundedDiv, RightBottomDiv } from "./component";

const Branding: React.FC = () => {
  return (
    <div>
      <Text1>같이의 가치</Text1>
      <Text2>MO-ING</Text2>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <CustomButton>로그인/회원가입</CustomButton>
      </Link>
      <RoundedDiv />
      <RightBottomDiv />
    </div>
  );
};

export default Branding;
