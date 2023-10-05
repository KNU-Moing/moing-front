import {
  Overlay,
  Category,
  CategoryButton,
  ContextOverlay,
} from "../component";
import { useNavigate } from "react-router-dom";
import Header from "../../header/header";

export const Diary = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <Overlay>
        <Category>
          <CategoryButton
            clicked={false}
            content="수첩"
            onClick={() => navigate("/notebook")}
          ></CategoryButton>
          <CategoryButton
            clicked={true}
            content="일기"
            onClick={() => {}}
          ></CategoryButton>
        </Category>
        <ContextOverlay>내용</ContextOverlay>
      </Overlay>
    </div>
  );
};
