import { useEffect, useState } from "react";
import StyledHeader from "../header";
import { Overlay, Container, CommunityContent } from "./component";
import { ContentBoxLayer, MoreButton } from "../../emotion/component";
import { ChartDetailLayout } from "../maternityNotebook/notebook/component";

export const Community = () => {
  const [recommends, setRecommends] = useState([
    {
      title: "입덧 극복하는 방법 꿀팁 (현재 3남매 기르는중)",
      content:
        "여러분 또또맘입니다~ 제가 이번에 또~ 하하 그렇게 되었네요 ㅎㅎ 그래서 여러분께...",
    },
    {
      title: "아. 아이스크림이 먹고 싶다!",
      content:
        "먹덧으로 미쳐버리겠습니다. 아이스크림이 먹고 싶은데 신랑이 회식갔어요 ㅠㅠㅠㅠㅠ ...",
    },
    {
      title: "임신 초기 조심해야할 것",
      content:
        "임신 초기는 안정기가 아니라 조심해야하죠 그래서 제가 조심해야할 것들을...",
    },
    {
      title: "미리 준비하면 좋은 것들!",
      content:
        "아이를 낳기 전에 미리 준비하면 좋은 것들을 준비해봤어요 일단 랭킹 1위 제품 ...",
    },
  ]);
  const [questions, setQuestions] = useState([{ title: "", content: "" }]);
  const moreHandle = () => {
    alert("더보기 버튼");
  };

  // 질문 데이터 앞에 Q.와 A.를 붙이는 작업
  useEffect(() => {
    const additionQ = recommends.map((recommend) => {
      return {
        title: "Q." + recommend.title,
        content: "A." + recommend.content,
      };
    });
    setQuestions(additionQ);
  }, []);

  return (
    <div>
      <StyledHeader></StyledHeader>
      <Overlay>
        <ChartDetailLayout>
          <ContentBoxLayer
            title="의사 선생님께 많이 묻는 질문"
            styleFlex="block"
            styleWidth="100%"
            styleHeight="56vh"
          >
            <MoreButton onClick={moreHandle} styleLeft="35.5vw"></MoreButton>
            <Container>
              {questions.map((recommend, index) => (
                <CommunityContent
                  key={index}
                  title={recommend.title}
                  content={recommend.content}
                ></CommunityContent>
              ))}
            </Container>
          </ContentBoxLayer>
          <ContentBoxLayer
            title="실시간 추천 게시글"
            styleFlex="block"
            styleWidth="100%"
            styleHeight="56vh"
          >
            <MoreButton onClick={moreHandle} styleLeft="35.5vw"></MoreButton>
            <Container>
              {recommends.map((recommend, index) => (
                <CommunityContent
                  key={index}
                  title={recommend.title}
                  content={recommend.content}
                ></CommunityContent>
              ))}
            </Container>
          </ContentBoxLayer>
        </ChartDetailLayout>
      </Overlay>
    </div>
  );
};
