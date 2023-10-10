import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./component/project/main";
import { MyPage } from "./component/project/mypage";
import { SignIn } from "./component/project/sign/signIn";
import { SignUp } from "./component/project/sign/signUp";
import { Notebook } from "./component/project/maternityNotebook/notebook";
import { Diary } from "./component/project/maternityNotebook/diary";
import { Question } from "./component/project/question";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mypage" element={<MyPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Notebook" element={<Notebook />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Question" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
