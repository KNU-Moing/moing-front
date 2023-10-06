import {
  Overlay,
  Category,
  CategoryButton,
  ContextOverlay,
  TitleContent,
} from "../component";
import {
  TodayChart,
  ImgContainer,
  ChartDetailLayout,
  ChartDetailSection,
} from "./component";
import { useNavigate } from "react-router-dom";
import Header from "../../header/header";
import { useEffect, useState } from "react";

export const Notebook = () => {
  const navigate = useNavigate();
  const [imgList, setDiaryList] = useState([
    "/img/DummyPicture.png",
    "/img/DummyPicture.png",
    "/img/DummyPicture.png",
  ]);

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
        <ContextOverlay>
          <TodayChart>
            <TitleContent content="오늘의 진료 기록"></TitleContent>
            <ImgContainer imgList={imgList}></ImgContainer>
            <ChartDetailLayout>
              <ChartDetailSection>오늘의 진료 기록 디테일</ChartDetailSection>
            </ChartDetailLayout>
          </TodayChart>
        </ContextOverlay>
      </Overlay>
    </div>
  );
};
