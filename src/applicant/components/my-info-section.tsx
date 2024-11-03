import { useState } from "react";
import styled from "styled-components";

export const MyInfoSection = () => {
  const [userInfo, setUserInfo] = useState({
    studentId: "20210001",
    email: "student@example.com",
    name: "홍길동",
    password: "********",
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<string>("");

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const handleEditClick = (field: string) => {
    if (field === "password") {
      setIsPasswordEditing(true);
    } else {
      setEditingField(field);
      setTempValue(userInfo[field as keyof typeof userInfo]);
    }
  };

  const handleCancelClick = () => {
    setEditingField(null);
    setTempValue("");
    setIsPasswordEditing(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleSaveClick = () => {
    if (editingField) {
      setUserInfo({ ...userInfo, [editingField as string]: tempValue });
      setEditingField(null);
      setTempValue("");
    } else if (isPasswordEditing) {
      if (newPassword === confirmPassword) {
        setUserInfo({ ...userInfo, password: "********" });
        setIsPasswordEditing(false);
      } else {
        alert("새 비밀번호가 일치하지 않습니다.");
      }
    }
  };

  return (
    <Section>
      <SectionTitle>기본 정보</SectionTitle>
      {Object.entries(userInfo).map(([field, value]) => (
        <InfoRow key={field}>
          <Label>
            {field === "studentId"
              ? "학번"
              : field === "email"
              ? "이메일"
              : field === "name"
              ? "이름"
              : "비밀번호"}
          </Label>
          {editingField === field ? (
            <>
              <InputField
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
              />
              <ActionButton onClick={handleSaveClick}>저장</ActionButton>
              <ActionButton onClick={handleCancelClick}>취소</ActionButton>
            </>
          ) : (
            <>
              <Value>{value}</Value>
              <EditButton onClick={() => handleEditClick(field)}>
                수정
              </EditButton>
            </>
          )}
        </InfoRow>
      ))}

      {isPasswordEditing && (
        <PasswordChangeContainer>
          <Label>현재 비밀번호</Label>
          <InputField
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="현재 비밀번호 입력"
          />
          <Label>새 비밀번호</Label>
          <InputField
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="새 비밀번호 입력"
          />
          <Label>비밀번호 확인</Label>
          <InputField
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="새 비밀번호 확인"
          />
          <ActionButton onClick={handleSaveClick}>저장</ActionButton>
          <ActionButton onClick={handleCancelClick}>취소</ActionButton>
        </PasswordChangeContainer>
      )}
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
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 700;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.span`
  flex: 1;
  font-weight: bold;
  color: #4a4a4a;
`;

const Value = styled.span`
  flex: 2;
  color: #7f8c8d;
  font-weight: 500;
  padding: 8px 0;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  font-size: 0.9rem;
  color: #3498db;
  background: #ecf0f1;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #3498db;
    color: #fff;
  }
`;

const InputField = styled.input`
  flex: 2;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #dcdde1;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border 0.2s;
  &:focus {
    border-color: #3498db;
  }
`;

const ActionButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 0.9rem;
  color: #3498db;
  background: #ecf0f1;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #3498db;
    color: #fff;
  }
`;

const PasswordChangeContainer = styled.div`
  margin-top: 18px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9fb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;
