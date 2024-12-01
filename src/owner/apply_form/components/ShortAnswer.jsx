import React from "react";
import styled from "styled-components";

const ShortAnswer = ({ questionData, updateQuestion }) => {
  const handleQuestionChange = (field, value) => {
    updateQuestion(questionData.id, { [field]: value });
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="질문 입력*"
        isQuestionInput
        value={questionData.question || ""}
        onChange={(e) => handleQuestionChange("question", e.target.value)}
      />
      <Input
        type="text"
        placeholder="설명 입력"
        value={questionData.description || ""}
        onChange={(e) => handleQuestionChange("description", e.target.value)}
      />
      <Placeholder>지원자의 단답형 답변 (200자 이내)</Placeholder>
    </Container>
  );
};

export default ShortAnswer;

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: ${(props) => (props.isQuestionInput ? "18px" : "16px")};
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Placeholder = styled.div`
  font-size: 12px;
  color: #888888;
  margin-top: 8px;
`;
