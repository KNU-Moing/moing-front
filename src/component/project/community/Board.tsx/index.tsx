import { useEffect, useState } from "react";
import StyledHeader from "../../header";
import Footer from "../../Footer";
import { Overlay, HeaderWithBack, ButtonBar } from "../QnA.tsx/component";
import {
  CategoryContainer,
  WriteButton,
} from "../../maternityNotebook/diary/component";
import { BoxContainer } from "../component";
import { ContentBox, SearchButton, GraphButton } from "./component";

export const Board = () => {
  const [categories, setCategory] = useState([
    { id: 1, title: "전체", checked: true },
    { id: 2, title: "추천", checked: false },
    { id: 3, title: "최신", checked: false },
  ]);
  const [selecedCate, setSelecedCate] = useState("산모 체중");

  useEffect(() => {
    let newArr = [...categories];
    newArr.forEach((category) => {
      selecedCate === category.title
        ? (category.checked = true)
        : (category.checked = false);
    });
    setCategory(newArr);
  }, [selecedCate]);

  return (
    <div>
      <StyledHeader></StyledHeader>
      <Overlay>
        <HeaderWithBack context="커뮤니티"></HeaderWithBack>
        <ButtonBar>
          <CategoryContainer>
            {categories.map((category) => (
              <GraphButton
                key={category.id}
                content={category}
                setCategory={setSelecedCate}
              ></GraphButton>
            ))}
          </CategoryContainer>
          <SearchButton></SearchButton>
          <WriteButton></WriteButton>
        </ButtonBar>
        <BoxContainer>
          <ContentBox
            title="임신 중기입니다. 궁금한것이 있는데..."
            content="입덧이 심하면 약으로 조절을 해볼 수 있습니다. 사람마다 입덧의 심함 정도가 다르니 너무 걱정하지 마세요. 입덧 시기가 조금만 지나면 식욕이 많이 생길 것 입니다. 조금만 참고 버티면 괜찮아질것입니다. 그동안 내원하시는 산부인과에 가서 입덧에 대한 고민과 상담을 충분히 하지만 담당 의사선생님께서 약 또는 다른 치료로 조금 더 수월하게 해줄 것 입니다. 너무 걱정하시 마세요."
          ></ContentBox>
        </BoxContainer>
      </Overlay>
      <Footer></Footer>
    </div>
  );
};
