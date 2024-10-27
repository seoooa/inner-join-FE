import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../common/ui";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ApplicantPage } from "../page";

export const ApplicationFormPage = () => {
  const { clubId } = useParams<Record<string, string>>();
  const location = useLocation();
  const position = location.state?.position;
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [charactersCount, setCharactersCount] = useState<number[]>([]);

  useEffect(() => {
    const mockQuestions = [
      "우리 동아리에 지원한 이유는 무엇인가요?",
      "우리 팀에 어떤 기술이나 경험을 가져다 줄 수 있나요?",
      "이 직책에서 이루고 싶은 목표나 기대가 무엇인가요?",
      "어려움이나 도전에 직면했을 때 어떻게 대처하나요?",
    ];
    setQuestions(mockQuestions);
    setAnswers(Array(mockQuestions.length).fill(""));
    setCharactersCount(Array(mockQuestions.length).fill(0));
  }, []);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);

    const updatedCount = [...charactersCount];
    updatedCount[index] = value.length;
    setCharactersCount(updatedCount);
  };

  const handleSubmit = () => {
    console.log("제출된 답변:", answers);
    navigate("/my");
  };

  return (
    <ApplicantPage>
      <Title>
        {clubId} - {position}
      </Title>
      <FormContainer>
        {questions.map((question, index) => (
          <QuestionContainer key={index}>
            <QuestionLabel>
              Q{index + 1}. {question}
            </QuestionLabel>
            <CharacterCount>{charactersCount[index]} 글자</CharacterCount>
            <AnswerInput
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </QuestionContainer>
        ))}
        <ButtonContainer>
          <Button label="임시저장" onClick={handleSubmit} variant="secondary" />
          <Button label="제출하기" onClick={handleSubmit} />
        </ButtonContainer>
      </FormContainer>
    </ApplicantPage>
  );
};

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  color: ${(props) => props.theme.color.primary};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const QuestionLabel = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
`;

const AnswerInput = styled.textarea`
  padding: 12px 16px;
  font-size: 1rem;
  height: 120px;
  resize: none;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.primary};
    background-color: #ffffff;
  }
`;

const CharacterCount = styled.span`
  position: absolute;
  top: 8px;
  right: 15px;
  font-size: 0.85rem;
  color: gray;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
