import { useState } from "react";
import { StyledHeader } from "../../../header/component";
import { useNavigate, useParams } from "react-router";

export const BoardRead = () => {
  const navigate = useNavigate();
  const { item } = useParams();
  const [title, setTitle] = useState("본문 내용");
  const [content, setContent] = useState("본문 내용");

  const handleDelete = () => {
    alert(content);
  };
  const handleUpdate = () => {
    navigate(`/Community/Board/update/:item`);
  };

  return (
    <div>
      <div>
        <div>
          <p>제목</p>
          <p>{title}</p>
        </div>
        <div>
          <p>본문 내용</p>
          <p>{content}</p>
        </div>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleUpdate}>수정</button>
      </div>
    </div>
  );
};
