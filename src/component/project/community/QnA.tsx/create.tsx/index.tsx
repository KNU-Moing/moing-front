import { useState } from "react";
import { StyledHeader } from "../../../header/component";

export const QnACreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleClick = () => {
    alert(content);
  };

  return (
    <div>
      <StyledHeader></StyledHeader>
      <div>
        <p>제목</p>
        <input type="text" onChange={(e) => onChange(e)}></input>
        <p>본문</p>
        <textarea onChange={(e) => onTextareaChange(e)}></textarea>
        <button onClick={handleClick}>작성 완료</button>
      </div>
    </div>
  );
};
