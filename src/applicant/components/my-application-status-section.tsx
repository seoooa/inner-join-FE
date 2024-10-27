import { useState } from "react";
import styled from "styled-components";

export const MyApplicationStatusSection = () => {
  const [applications] = useState([
    {
      clubName: "동아리 A",
      documentStatus: "검토 전",
      interviewStatus: "검토 전",
      finalStatus: "검토 전",
    },
    {
      clubName: "동아리 B",
      documentStatus: "합격",
      interviewStatus: "불합격",
      finalStatus: "불합격",
    },
    {
      clubName: "동아리 C",
      documentStatus: "합격",
      interviewStatus: "합격",
      finalStatus: "합격",
    },
  ]);

  return (
    <Section>
      <SectionTitle>지원한 동아리 정보</SectionTitle>
      {applications.map((application, index) => (
        <ClubInfoContainer key={index}>
          <ClubName>{application.clubName}</ClubName>
          <StatusContainer>
            <StatusRow>
              <StatusLabel>서류 검토</StatusLabel>
              <StatusTag status={application.documentStatus}>
                {application.documentStatus}
              </StatusTag>
            </StatusRow>
            <StatusRow>
              <StatusLabel>면접 검토</StatusLabel>
              <StatusTag status={application.interviewStatus}>
                {application.interviewStatus}
              </StatusTag>
            </StatusRow>
            <StatusRow>
              <StatusLabel>최종 합격</StatusLabel>
              <StatusTag status={application.finalStatus}>
                {application.finalStatus}
              </StatusTag>
            </StatusRow>
          </StatusContainer>
        </ClubInfoContainer>
      ))}
    </Section>
  );
};

const Section = styled.section`
  margin: 2%;
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 24px;
  color: #2c3e50;
  font-weight: 700;
  text-align: left;
`;

const ClubInfoContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ClubName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 8px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatusRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusLabel = styled.span`
  font-weight: 600;
  color: #555;
`;

const StatusTag = styled.span<{ status: string }>`
  padding: 8px 6px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background-color: ${({ status }) =>
    status === "검토 전" ? "#ddd" : status === "합격" ? "#66BB6A" : "#EF5350"};
  text-transform: uppercase;
  display: inline-block;
  min-width: 70px;
  text-align: center;
`;
