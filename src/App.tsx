import React from "react";
import { Routes, Route} from "react-router-dom";
import { Main } from "./component/project/main";
import { MyPage } from "./component/project/mypage";
import { SignIn } from "./component/project/sign/signIn";
import { SignUp } from "./component/project/sign/signUp";
import { Community } from "./component/project/community";
import { Notebook } from "./component/project/maternityNotebook/notebook";
import { Diary } from "./component/project/maternityNotebook/diary";
import { Cook } from "./component/project/cook";
import { Detail } from "./component/project/cook/detail.tsx";
import { Supplies } from "./component/project/supplies";
import { Question } from "./component/project/question/questionWrite";
import QuestionConfirm from "./component/project/question/questionConfirm";

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
        <Route path="/Cook" element={<Cook />} />
        <Route path="/Cook/:item" element={<Detail />} />
        <Route path="/Supplies" element={<Supplies />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/Question/Confirm" element={<QuestionConfirm/>}/>
      </Routes>
    </div>
  );
}

export default App;
