import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ApplicantList from "../components/ApplicantList";

interface Applicant {
  id: string;
  name: string;
  firstState: string;
  secondState: string;
  position: string;
}

const applicantData = [
  {
    id: "20211511",
    name: "김서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211512",
    name: "나서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211513",
    name: "다서아",
    firstState: "fail",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211514",
    name: "라서아",
    firstState: "null",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211515",
    name: "마서아",
    firstState: "fail",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211516",
    name: "바서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211517",
    name: "사서아",
    firstState: "null",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211518",
    name: "아서아",
    firstState: "null",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211519",
    name: "자서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211520",
    name: "차서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211521",
    name: "카서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211522",
    name: "타서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211523",
    name: "파서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211524",
    name: "하서아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211523",
    name: "김어아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
  {
    id: "20211524",
    name: "나어아",
    firstState: "pass",
    secondState: "null",
    position: "단장단",
  },
];

const positionData = [
  {
    id: "1",
    name: "전체",
  },
  {
    id: "2",
    name: "단장단",
  },
  {
    id: "3",
    name: "기획단",
  },
];

const stateList = ["미평가", "합격", "불합격"];

const DocEvaluate = () => {
  const [restList, setRestList] = useState<Applicant[]>([]);
  const [passList, setPassList] = useState<Applicant[]>([]);
  const [failList, setFailList] = useState<Applicant[]>([]);

  useEffect(() => {
    setPassList(
      applicantData.filter((applicant) => applicant.firstState === "pass")
    );
    setFailList(
      applicantData.filter((applicant) => applicant.firstState === "fail")
    );
    setRestList(
      applicantData.filter((applicant) => applicant.firstState === "null")
    );
  }, [applicantData]);

  return (
    <Wrapper>
      <ApplicantList data1={applicantData} data2={positionData} />
      <Container>
        <Title>
          <h1>트라이파시 12기 단장단 / 기획단 모집합니다 ! ✨</h1>
          <p>2021년 3월 8일 마감</p>
        </Title>
        <Information>
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
        </Information>
        <EvaluationTable>
          <div>
            <TableTitle state="null">미평가</TableTitle>
            <TableContainer>
              {restList?.map((applicant, index) => (
                <TableItem
                  key={applicant.id}
                  loc={index}
                  length={restList.length}
                >
                  {applicant.name}
                </TableItem>
              ))}
            </TableContainer>
          </div>
          <div>
            <TableTitle state="pass">합격</TableTitle>
            <TableContainer>
              {passList?.map((applicant, index) => (
                <TableItem
                  key={applicant.id}
                  loc={index}
                  length={passList.length}
                >
                  {applicant.name}
                </TableItem>
              ))}
            </TableContainer>
          </div>
          <div>
            <TableTitle state="fail">불합격</TableTitle>
            <TableContainer>
              {failList?.map((applicant, index) => (
                <TableItem
                  key={applicant.id}
                  loc={index}
                  length={failList.length}
                >
                  {applicant.name}
                </TableItem>
              ))}
            </TableContainer>
          </div>
        </EvaluationTable>
        <NextButton>다음 단계</NextButton>
      </Container>
    </Wrapper>
  );
};

export default DocEvaluate;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0px 10%;
  padding-top: 60px;
  overflow-y: auto;
  background-color: #fff;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 47px;

  h1 {
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.32px;
  }
  p {
    color: #767676;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
  }
`;

const Information = styled.div`
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

const EvaluationTable = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
  font-family: Pretendard;
`;

const TableTitle = styled.div<{ state: string }>`
  text-align: center;
  width: 200px;
  padding: 6px 12px;
  border-radius: 10px 10px 0px 0px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.36px;

  background-color: ${({ state }) => {
    if (state === "pass") return "#F3FFFB";
    if (state === "fail") return "#fff3f3;";
    return "#F9F9F9";
  }};

  color: ${({ state }) => {
    if (state === "pass") return "#188865";
    if (state === "fail") return "#88181C";
    return "#555";
  }};

  border: ${({ state }) => {
    if (state === "pass") return "1px solid #188865";
    if (state === "fail") return "1px solid #88181C";
    return "1px solid #555";
  }};
`;

const TableContainer = styled.div`
  display: flex;
  width: 200px;
  padding: 12px 0px;
  padding-left: 16px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: 0px 0px 20px 20px;
  border: 1px solid #f0f0f0;
`;

const TableItem = styled.div<{ loc: number; length: number }>`
  display: flex;
  padding: 16px 24px;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;

  border-left: ${({ loc }) => {
    if (loc % 2 === 1) return "1px solid #f0f0f0";
  }};
  border-bottom: ${({ loc, length }) => {
    if (Math.floor(loc / 2) < Math.floor((length - 1) / 2))
      return "1px solid #f0f0f0";
  }};
`;

const NextButton = styled.div`
  text-align: center;
  width: 120px;
  padding: 12px 30px;
  border-radius: 30px;
  background-color: #b10d15;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  position: fixed;
  bottom: 30px;
  right: 5%;

  &:hover {
    cursor: pointer;
  }
`;
