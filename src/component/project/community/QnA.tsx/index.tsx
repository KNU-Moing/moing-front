import { useState } from "react";
import StyledHeader from "../../header";
import Footer from "../../Footer";
import {
  ButtonBar,
  HeaderWithBack,
  InputSearch,
  Overlay,
  QnABox,
} from "./component";
import { BoxContainer } from "../component";
import {
  CustomSelect,
  WriteButton,
} from "../../maternityNotebook/diary/component";

export const QnA = () => {
  const [search, setSearch] = useState("");
  const sortList = ["최신순", "오래된순", "grape", "orange"];
  const [selected, setSelected] = useState("최신순");
  return (
    <div>
      <StyledHeader></StyledHeader>
      <Overlay>
        <HeaderWithBack context="의사 선생님께 많이 묻는 질문"></HeaderWithBack>
        <InputSearch context={search} setContext={setSearch}></InputSearch>
        <ButtonBar>
          <CustomSelect
            setState={setSelected}
            selected={selected}
            sortList={sortList}
          ></CustomSelect>
          <WriteButton></WriteButton>
        </ButtonBar>
        <BoxContainer>
          <QnABox
            question="입덧이 다른 사람들에 비해 너무 심한 것 같아서 고민입니다. 이럴땐 어떡하면 좋을까요?"
            answer="입덧이 심하면 약으로 조절을 해볼 수 있습니다. 사람마다 입덧의 심함 정도가 다르니 너무 걱정하지 마세요. 입덧 시기가 조금만 지나면 식욕이 많이 생길 것 입니다. 조금만 참고 버티면 괜찮아질것입니다. 그동안 내원하시는 산부인과에 가서 입덧에 대한 고민과 상담을 충분히 하지만 담당 의사선생님께서 약 또는 다른 치료로 조금 더 수월하게 해줄 것 입니다. 너무 걱정하시 마세요."
          ></QnABox>
          <QnABox
            question="입덧이 다른 사람들에 비해 너무 심한 것 같아서 고민입니다. 이럴땐 어떡하면 좋을까요?"
            answer="입덧이 심하면 약으로 조절을 해볼 수 있습니다. 사람마다 입덧의 심함 정도가 다르니 너무 걱정하지 마세요. 입덧 시기가 조금만 지나면 식욕이 많이 생길 것 입니다. 조금만 참고 버티면 괜찮아질것입니다. 그동안 내원하시는 산부인과에 가서 입덧에 대한 고민과 상담을 충분히 하지만 담당 의사선생님께서 약 또는 다른 치료로 조금 더 수월하게 해줄 것 입니다. 너무 걱정하시 마세요."
          ></QnABox>
        </BoxContainer>
      </Overlay>
      <Footer></Footer>
    </div>
  );
};
