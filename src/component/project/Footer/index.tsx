import { Overlay, Telephone, PinkContainer } from "./component";

const Footer = () => {
  const contents = [
    { topContent: "대표이사 사장 유경빈", bottomContent: "용인 강남대학교" },
    {
      topContent: "사업등록번호 12394712",
      bottomContent: "통신판매업 신고번호 293123",
    },
    {
      topContent: "사업등록번호 12394712",
      bottomContent: "통신판매업 신고번호 293123",
    },
    {
      topContent: "사업등록번호 12394712",
      bottomContent: "통신판매업 신고번호 293123",
    },
  ];
  return (
    <div>
      <Overlay>
        <img src="./img/footerLogo.png" alt="footerLogo" width="110rem"></img>
        <Telephone></Telephone>
        {contents.map((content, index) => (
          <PinkContainer
            key={index}
            topContent={content.topContent}
            bottomContent={content.bottomContent}
          ></PinkContainer>
        ))}
      </Overlay>
    </div>
  );
};

export default Footer;
