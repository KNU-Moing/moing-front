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
  ContentBoxLayer,
  ChartContent,
  HospitalVisitDay,
  WeeksTipLayout,
  WeeksTipLContainer,
  WeeksTipRContainer,
  TipTitle,
  TipContent,
  GraphLayout,
  GraphBtnContainer,
  GraphButton,
  GraphContainer,
  Gragh,
  MoreButton,
  EtcOverLay,
  ChartContainer,
  WeeksChart,
} from "./component";
import { useNavigate } from "react-router-dom";
import StyledHeader from "../../header";
import { useEffect, useState } from "react";

export type TipType = {
  index: number;
  title: string;
  content: string;
};
export type GraphBtnType = {
  title: string;
  checked: boolean;
};

export const Notebook = () => {
  const navigate = useNavigate();
  const [imgList, setDiaryList] = useState([
    "/img/DummyPicture.png",
    "/img/DummyPicture.png",
    "/img/DummyPicture.png",
  ]);
  const [weeksTip, setWeeksTip] = useState([
    {
      index: 1,
      title: "부부간의 성생활을 해주세요",
      content:
        "엄마 몸에 안정이 찾아오고 임신에 대한 두려움이 사라지는 단계예요! 부부간의 성생활이 유산을 초래할 수 있다는 말은 과민이에요 적당한 성생활은 좋아요 단, 임산부의 배를 고려한 체위로 해주세요",
    },
    {
      index: 2,
      title: "카페인에 대한 경각심을 늦추지 마세요!",
      content:
        "엄마 몸에 안정이 찾아오고 임신에 대한 두려움이 사라지는 단계예요! 부부간의 성생활이 유산을 초래할 수 있다는 말은 과민이에요 적당한 성생활은 좋아요 단, 임산부의 배를 고려한 체위로 해주세요",
    },
    {
      index: 3,
      title: "초유가 만들어지기 시작해요",
      content:
        "엄마 몸에 안정이 찾아오고 임신에 대한 두려움이 사라지는 단계예요! 부부간의 성생활이 유산을 초래할 수 있다는 말은 과민이에요 적당한 성생활은 좋아요 단, 임산부의 배를 고려한 체위로 해주세요",
    },
  ]);
  const [graphCategory, setGraphCategory] = useState([
    { id: 1, title: "산모 체중", checked: true },
    { id: 2, title: "산모 혈압", checked: false },
    { id: 3, title: "태아 크기", checked: false },
    { id: 4, title: "태아 체중", checked: false },
  ]);
  const [selecedGraph, setSelecedGraph] = useState("산모 체중");
  const [hospitalChart, setHospitalChart] = useState([
    {
      index: 1,
      src: "/img/DummyPicture.png",
    },
    {
      index: 2,
      src: "/img/DummyPicture.png",
    },
    {
      index: 3,
      src: "/img/DummyPicture.png",
    },
    {
      index: 4,
      src: "/img/DummyPicture.png",
    },
    {
      index: 5,
      src: "/img/DummyPicture.png",
    },
    {
      index: 6,
      src: "/img/DummyPicture.png",
    },
  ]);
  const moreHandle = () => {
    alert("더보기 버튼");
  };

  useEffect(() => {
    let newArr = [...graphCategory];
    newArr.forEach((category) => {
      selecedGraph === category.title
        ? (category.checked = true)
        : (category.checked = false);
    });
    setGraphCategory(newArr);
  }, [selecedGraph]);

  return (
    <div>
      <StyledHeader></StyledHeader>
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
              <ChartDetailSection>
                <ContentBoxLayer
                  title="산모 정보"
                  styleFlex="flex"
                  styleWidth="100%"
                  styleHeight="16vh"
                >
                  <ChartContent
                    kind="산모 혈압"
                    value="110"
                    unit="mmlg"
                  ></ChartContent>
                  <ChartContent
                    kind="산모 체중"
                    value="65"
                    unit="kg"
                  ></ChartContent>
                  <ChartContent
                    kind="특별 검사"
                    value="없음"
                    unit=""
                  ></ChartContent>
                </ContentBoxLayer>
                <ContentBoxLayer
                  title="태아 정보"
                  styleFlex="flex"
                  styleWidth="100%"
                  styleHeight="16vh"
                >
                  <ChartContent
                    kind="태아 크기"
                    value="8.5"
                    unit="cm"
                  ></ChartContent>
                  <ChartContent
                    kind="태아 체중"
                    value="40"
                    unit="g"
                  ></ChartContent>
                </ContentBoxLayer>
                <ContentBoxLayer
                  title="다음 내원일"
                  styleFlex="flex"
                  styleWidth="100%"
                  styleHeight="16vh"
                >
                  <HospitalVisitDay
                    year={20}
                    month={0}
                    day={2}
                    days="목요일"
                  ></HospitalVisitDay>
                </ContentBoxLayer>
              </ChartDetailSection>
              <ChartDetailSection>
                <ContentBoxLayer
                  title="주차별 Tip!"
                  styleFlex="block"
                  styleWidth="100%"
                  styleHeight="50.2vh"
                >
                  <MoreButton
                    onClick={moreHandle}
                    styleLeft="35.5vw"
                  ></MoreButton>
                  <WeeksTipLayout>
                    <WeeksTipLContainer days={97}></WeeksTipLContainer>
                    <WeeksTipRContainer>
                      <TipTitle moment="중기"></TipTitle>
                      {weeksTip.map((tip) => (
                        <TipContent tip={tip}></TipContent>
                      ))}
                    </WeeksTipRContainer>
                  </WeeksTipLayout>
                </ContentBoxLayer>
              </ChartDetailSection>
            </ChartDetailLayout>
          </TodayChart>

          <ContentBoxLayer
            title="그래프"
            styleFlex="block"
            styleWidth="90%"
            styleHeight="40vh"
          >
            <GraphLayout>
              <GraphBtnContainer>
                {graphCategory.map((content) => (
                  <GraphButton
                    content={content}
                    setCategory={setSelecedGraph}
                  ></GraphButton>
                ))}
              </GraphBtnContainer>
              <GraphContainer>
                <Gragh></Gragh>
              </GraphContainer>
            </GraphLayout>
          </ContentBoxLayer>

          <EtcOverLay>
            <ContentBoxLayer
              styleFlex="block"
              title="진료 기록 보기"
              styleWidth="60%"
              styleHeight="50vh"
            >
              <MoreButton onClick={moreHandle} styleLeft="44vw"></MoreButton>
              <ChartContainer>
                {hospitalChart.map((chart) => (
                  <WeeksChart week={chart.index} src={chart.src}></WeeksChart>
                ))}
              </ChartContainer>
            </ContentBoxLayer>
            <ContentBoxLayer
              title="임신 중기 추천 제품!"
              styleFlex="block"
              styleWidth="39%"
              styleHeight="50vh"
            >
              {""}
            </ContentBoxLayer>
          </EtcOverLay>
        </ContextOverlay>
      </Overlay>
    </div>
  );
};
