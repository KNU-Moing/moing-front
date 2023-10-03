import React, { useState } from "react";
import {
  Overlay,
  MyPageContainer,
  ProfileSection,
  Profile,
  PregancyPeriod,
  BlankSection,
  InfoLayer,
  InfoDetail,
  InfoProfile,
  ChangeButton,
  ProfileImg,
  InfoSection,
  InfoLeftSection,
  InfoBtnSection,
} from "./component";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HospitalModal, UpdatedModal, InfoModal } from "./modal";
import theme from "../../../styles/theme";

export const MyPage = () => {
  const dummyImage = "http://via.placeholder.com/120x120";
  const dummyImage2 = "http://via.placeholder.com/180x180";
  const [isOpenHospital, setIsOpenedHospital] = useState(false);
  const [isOpenInfo, setIsOpenedInfo] = useState(false);
  const [isOpenUpdated, setIsOpenUpdated] = useState(false);

  const [username, setUsername] = useState("");
  const [partner, setPartner] = useState("");

  return (
    <Overlay>
      <ProfileSection>
        <Profile name="쑥쑥이 엄마" src={dummyImage}></Profile>
        <PregancyPeriod name="쑥쑥이" day={97} week={14}></PregancyPeriod>
        <Profile name="쑥쑥이 아빠" src={dummyImage}></Profile>
      </ProfileSection>

      <MyPageContainer title="내 정보">
        <ProfileImg src={dummyImage2} size="180px"></ProfileImg>
        <div
          css={css`
            padding: ${theme.spacing.sm};
          `}
        >
          <InfoProfile name="쑥쑥이엄마" day={97}></InfoProfile>

          <InfoLayer>
            <InfoLeftSection>
              <InfoDetail title="보호자" context="쑥쑥이아빠"></InfoDetail>
              <InfoBtnSection>
                <InfoDetail
                  title="병원"
                  context="가나다라산부인과"
                ></InfoDetail>
                <ChangeButton
                  onClick={() => setIsOpenedHospital(true)}
                ></ChangeButton>
              </InfoBtnSection>
            </InfoLeftSection>
            <div style={{ marginLeft: theme.spacing.md }}>
              <InfoDetail
                title="이메일"
                context="rudgml742@gmail.com"
              ></InfoDetail>
              <InfoBtnSection>
                <InfoDetail title="비밀번호 변경" context=""></InfoDetail>
                <ChangeButton
                  onClick={() => setIsOpenedInfo(true)}
                ></ChangeButton>
              </InfoBtnSection>
            </div>
          </InfoLayer>
        </div>
      </MyPageContainer>

      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <BlankSection title="몸 상태"></BlankSection>
        <BlankSection title="주차별 도움"></BlankSection>
      </p>
      <HospitalModal
        isOpen={isOpenHospital}
        closeModal={() => setIsOpenedHospital(false)}
      ></HospitalModal>
      <InfoModal
        isOpen={isOpenInfo}
        closeModal={() => setIsOpenedInfo(false)}
        openModel={() => setIsOpenUpdated(true)}
      ></InfoModal>
      <UpdatedModal
        isOpen={isOpenUpdated}
        closeModal={() => setIsOpenUpdated(false)}
      ></UpdatedModal>
    </Overlay>
  );
};
