import React, { useState } from "react";
import {
  Overlay,
  MyPageContainer,
  ProfileSection,
  ProfileBtn,
  Profile,
  PregancyPeriod,
  InfoContainer,
  InfoDetail,
  InfoProfile,
  ChangeButton,
  ProfileImg,
  InfoSection,
  InfoLayout,
} from "./component";
import StyledHeader from "../header";
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
      <StyledHeader></StyledHeader>
      <ProfileSection>
        <Profile name="쑥쑥이 엄마" src={theme.palette.pink[400]}></Profile>
        <PregancyPeriod name="쑥쑥이" day={97} week={14}></PregancyPeriod>
        <Profile name="쑥쑥이 아빠" src={theme.palette.blue[200]}></Profile>
      </ProfileSection>

      <MyPageContainer title="내 정보" styleWidth="70%">
        <ProfileImg src={theme.palette.pink[400]} size="180px"></ProfileImg>

        <InfoLayout>
          <InfoProfile name="쑥쑥이엄마" day={97}></InfoProfile>
          <ProfileBtn onClick={() => alert("프로필 변경")}></ProfileBtn>

          <InfoContainer>
            <InfoSection left={true}>
              <InfoDetail title="보호자" context="쑥쑥이아빠">
                {" "}
              </InfoDetail>
              <InfoDetail title="병원" context="가나다라산부인과">
                <ChangeButton
                  onClick={() => setIsOpenedHospital(true)}
                ></ChangeButton>
              </InfoDetail>
            </InfoSection>

            <InfoSection left={false}>
              <InfoDetail title="이메일" context="rudgml742@gmail.com">
                {" "}
              </InfoDetail>
              <InfoDetail title="비밀번호 변경" context="">
                <ChangeButton
                  onClick={() => setIsOpenedInfo(true)}
                ></ChangeButton>{" "}
              </InfoDetail>
            </InfoSection>
          </InfoContainer>
        </InfoLayout>
      </MyPageContainer>

      <p
        style={{
          display: "flex",
          marginTop: theme.spacing.md,
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <MyPageContainer title="몸 상태" styleWidth="47%">
          <div style={{ height: "40vh" }}></div>
        </MyPageContainer>
        <MyPageContainer title="주차별 도움" styleWidth="47%">
          <div style={{ height: "40vh" }}></div>
        </MyPageContainer>
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
