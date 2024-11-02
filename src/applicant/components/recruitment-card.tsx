import styled from "styled-components";
import { Button } from "../../common/ui";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const RecruitmentStatus = {
  in_progress: "모집중",
  completed: "모집완료",
};

const formatDate = (dateString: string) => {
  return format(new Date(dateString), "yyyy-MM-dd HH:mm");
};

export type TRecruitmentCardProps = {
  clubId: string;
  imageUrl: string;
  status: keyof typeof RecruitmentStatus;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  category: string;
  name: string;
  tags: string[];
};

export const RecruitmentCard = ({
  clubId,
  imageUrl,
  status,
  category,
  name,
  tags,
  recruitmentStartDate,
  recruitmentEndDate,
}: TRecruitmentCardProps) => {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <ImageContainer>
        <ProfileImage src={imageUrl} alt="Club Logo" />
      </ImageContainer>
      <StatusLabel>{RecruitmentStatus[status]}</StatusLabel>
      <RecruitmentPeriod>
        {formatDate(recruitmentStartDate)} ~ {formatDate(recruitmentEndDate)}
      </RecruitmentPeriod>
      <ClubCategory>{category}</ClubCategory>
      <ClubName>{name}</ClubName>

      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </TagsContainer>
      <ButtonContainer>
        <Button
          label="모집 공고 보러가기"
          onClick={() => {
            navigate(`/recruitment/${clubId}`);
          }}
        />
      </ButtonContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #ddd;
`;

const StatusLabel = styled.div`
  display: inline-flex;
  justify-content: center;
  width: auto;
  margin-top: 20px;
  padding: 6px 15px;
  color: ${(props) => props.theme.color.primary};
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 800;
`;

const RecruitmentPeriod = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const ClubCategory = styled.div`
  margin-top: 20px;
  color: #888;
  font-size: 14px;
`;

const ClubName = styled.div`
  margin-top: 2px;
  font-weight: bold;
  font-size: 20px;
  color: #333;
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;

const Tag = styled.div`
  background-color: ${(props) => props.theme.color.primaryLight};
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  color: #333;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;
