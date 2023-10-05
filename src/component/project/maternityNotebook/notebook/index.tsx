import {
  Overlay,
  Category,
  CategoryButton,
  ContextOverlay,
} from "../component";
import { useNavigate } from "react-router-dom";
import Header from "../../header/header";

export const Notebook = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <Overlay>
        <Category>
          <CategoryButton
            clicked={true}
            content="수첩"
            onClick={() => {}}
          ></CategoryButton>
          <CategoryButton
            clicked={false}
            content="일기"
            onClick={() => navigate("/diary")}
          ></CategoryButton>
        </Category>
        <ContextOverlay>내용</ContextOverlay>
      </Overlay>
    </div>
  );
};
