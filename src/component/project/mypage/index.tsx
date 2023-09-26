import React, { useState } from "react";
import {
  Profile,
  PregancyPeriod,
  BlankSection,
  Information,
  ChangeButton,
} from "./component";
import { HospitalModal, UpdatedModal, InfoModal } from "./modal";
import theme from "../../../styles/theme";

export const MyPage = () => {
  const dummyImage = "http://via.placeholder.com/120x120";
  const dummyImage2 = "http://via.placeholder.com/180x180";
  const [isOpenHospital, setIsOpenedHospital] = useState(false);
  const [isOpenInfo, setIsOpenedInfo] = useState(false);
  const [isOpenUpdated, setIsOpenUpdated] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ display: "flex", flexDirection: "row", margin: "20px" }}>
        <Profile name="쑥쑥이 엄마" src={dummyImage}></Profile>
        <PregancyPeriod name="쑥쑥이" day={97} week={14}></PregancyPeriod>
        <Profile name="쑥쑥이 아빠" src={dummyImage}></Profile>
      </p>
      <p>
        <div
          style={{
            fontSize: theme.typography.body2Bold.fontSize,
            fontWeight: theme.typography.body2Bold.fontWeight,
          }}
        >
          내 정보
        </div>
        <div
          style={{
            backgroundColor: theme.palette.gray[200],
            width: "73vw",
            padding: theme.spacing.sm,
            marginTop: theme.spacing.xs,
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <img
            src={dummyImage2}
            style={{ borderRadius: "70%", margin: theme.spacing.sm }}
          ></img>
          <div style={{ padding: theme.spacing.sm }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: theme.spacing.md,
              }}
            >
              <div
                style={{
                  fontSize: theme.typography.body1Bold.fontSize,
                  fontWeight: theme.typography.body1Bold.fontWeight,
                  marginRight: "2vw",
                }}
              >
                쑥쑥이 엄마
              </div>
              <div>14주차 1일 임신 초기</div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  width: "28vw",
                  borderRight: `solid 2px ${theme.palette.gray[300]}`,
                }}
              >
                <Information title="보호자" context="쑥쑥이아빠"></Information>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Information
                    title="병원"
                    context="가나다라산부인과"
                  ></Information>
                  <ChangeButton
                    onClick={() => setIsOpenedHospital(true)}
                  ></ChangeButton>
                </div>
              </div>
              <div style={{ marginLeft: theme.spacing.md }}>
                <Information
                  title="이메일"
                  context="rudgml742@gmail.com"
                ></Information>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Information title="비밀번호 변경" context=""></Information>
                  <ChangeButton
                    onClick={() => setIsOpenedInfo(true)}
                  ></ChangeButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </p>
      <p style={{ display: "flex" }}>
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
    </div>
  );
};
