import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./component/project/main";
import { MyPage } from "./component/project/mypage";
import { SignIn } from "./component/project/sign/signIn";
import { SignUp } from "./component/project/sign/signUp";
import { Cook } from "./component/project/cook";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mypage" element={<MyPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cook" element={<Cook />} />
      </Routes>
    </div>
  );
}

export default App;
