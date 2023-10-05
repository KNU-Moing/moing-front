import {
  Overlay,
  Category,
  CategoryButton,
  ContextOverlay,
} from "../component";
import {
  TitleBar,
  WriteButton,
  TitleContent,
  SortSelect,
  DiaryOverlay,
} from "./component";
import { useNavigate } from "react-router-dom";
import Header from "../../header/header";
import { useState } from "react";

export const Diary = () => {
  const navigate = useNavigate();
  const sortList = ["최신순", "오래된순", "grape", "orange"];
  const [selected, setSelected] = useState("");
  const [diaryList, setDiaryList] = useState("");

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

        <ContextOverlay>
          <TitleBar>
            <TitleContent></TitleContent>
            <SortSelect
              setState={setSelected}
              selected={selected}
              sortList={sortList}
            ></SortSelect>
            <WriteButton></WriteButton>
          </TitleBar>
          <DiaryOverlay>일기 목록</DiaryOverlay>
        </ContextOverlay>
      </Overlay>
    </div>
  );
};
