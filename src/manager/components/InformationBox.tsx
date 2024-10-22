import React from "react";
import styled from "styled-components";

interface Applicant {
  id: string;
  name: string;
  firstState: string;
  secondState: string;
  position: string;
}

interface InformationBoxProps {
  restList: Applicant[];
  passList: Applicant[];
  failList: Applicant[];
}

const InformationBox = ({
  restList,
  passList,
  failList,
}: InformationBoxProps) => {
  return (
    <Wrapper>
      <h2>
        {passList.length + failList.length + restList.length}명 중{" "}
        {passList.length}명이 합격했어요 !
      </h2>
      <InfoRatio>
        <div>
          <h3>합격률</h3>
          <p>
            {Math.round(
              (passList.length * 100) /
                (passList.length + failList.length + restList.length)
            )}
          </p>
          <h3>%</h3>
        </div>
        <div>
          <h3>경쟁률</h3>
          <p>
            {Math.round(
              ((passList.length + failList.length + restList.length) /
                passList.length) *
                Math.pow(10, 2)
            ) / Math.pow(10, 2)}{" "}
            : 1
          </p>
        </div>
      </InfoRatio>
      <InfoBox>
        <div>
          <h3>전체</h3>
          <Count state="null">
            {passList.length + failList.length + restList.length}
          </Count>
          <h3>명</h3>
        </div>
        |
        <div>
          <h3>합격자</h3>
          <Count state="pass">{passList.length}</Count>
          <h3>명</h3>
        </div>
        |
        <div>
          <h3>불합격자</h3>
          <Count state="fail">{failList.length}</Count>
          <h3>명</h3>
        </div>
      </InfoBox>
    </Wrapper>
  );
};

export default InformationBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 170%; /* 54.4px */
    letter-spacing: -0.64px;
  }
`;

const InfoRatio = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  div {
    display: flex;
    align-items: center;
  }

  h3 {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 170%; /* 34px */
    letter-spacing: -0.4px;
    margin: 0px 3px;
  }
  p {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 170%; /* 47.6px */
    letter-spacing: -0.56px;
    margin-left: 5px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  width: 630px;
  height: 60px;
  margin-top: 12px;
  padding: 18px 40px;
  align-items: center;
  justify-content: center;
  gap: 48px;
  border-radius: 16px;
  background: #f9f9f9;
  font-family: Pretendard;

  div {
    display: flex;
    align-items: center;
  }

  h3 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.32px;
  }
`;

const Count = styled.div<{ state: string }>`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.36px;
  margin-left: 40px;
  margin-right: 3px;

  color: ${({ state }) => {
    if (state === "pass") return "#188865";
    if (state === "fail") return "#88181C";
    return "#000";
  }};
`;
