import { useState } from "react";
import { styled, keyframes } from "styled-components";
import { Carousel, Tab } from "../../common/ui";
import { RecruitmentCard } from "../components";
import { recruitmentCardListData } from "../mock/recruitment-card-list-data";
import { ApplicantPage } from "../page";

export const RecruitmentListPage = () => {
  const [activeTab, setActiveTab] = useState<string>("전체");
  const [filteredCards, setFilteredCards] = useState(recruitmentCardListData);
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = [
    { label: "전체", value: "전체" },
    { label: "봉사분과", value: "봉사분과" },
    { label: "사회교양분과", value: "사회교양분과" },
    { label: "연행예술분과", value: "연행예술분과" },
    { label: "종교분과", value: "종교분과" },
    { label: "체육분과", value: "체육분과" },
    { label: "학술분과", value: "학술분과" },
  ];

  const handleTabChange = (tab: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setFilteredCards(
        tab === "전체"
          ? recruitmentCardListData
          : recruitmentCardListData.filter((card) => card.category === tab)
      );
      setIsAnimating(false);
    }, 200);
  };

  return (
    <ApplicantPage>
      <CarouselTitle>
        📌 모집 마감이 얼마 남지 않았어요! 바로 지원해볼까요?
      </CarouselTitle>
      <Carousel />

      <Container>
        <TabContainer className="tab-container">
          <Tab tabs={tabs} activeTab={activeTab} onTabClick={handleTabChange} />
        </TabContainer>
        <CardListContainer isAnimating={isAnimating}>
          {filteredCards.map((card) => (
            <RecruitmentCard
              key={card.clubId}
              clubId={card.clubId}
              imageUrl={card.imageUrl}
              status={card.status}
              recruitmentStartDate={card.recruitmentStartDate}
              recruitmentEndDate={card.recruitmentEndDate}
              category={card.category}
              name={card.name}
              tags={card.tags}
            />
          ))}
        </CardListContainer>
      </Container>
    </ApplicantPage>
  );
};

const CarouselTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 5%;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 10px;
  }
`;

const CardListContainer = styled.div<{ isAnimating: boolean }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 60px;
  animation: ${(props) => (props.isAnimating ? fadeOut : fadeIn)} 0.2s
    ease-in-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const fadeOut = keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `;
