export const validateClubName = (value: string | number) => {
  const stringValue = String(value);
  if (!stringValue) return "동아리명을 입력해주세요.";
  return null;
};

export const validateClubCategoty = (value: string | number) => {
  const stringValue = String(value);
  if (!stringValue) return "동아리 분류를 입력해주세요.";
  return null;
};

export const validateEmail = (value: string | number) => {
  const stringValue = String(value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!stringValue) return "이메일을 입력해주세요.";
  if (!emailRegex.test(stringValue))
    return "유효한 이메일 주소를 입력해주세요.";
  return null;
};

export const validatePassword = (value: string | number) => {
  const stringValue = String(value);
  if (!stringValue) return "비밀번호를 입력해주세요.";
  if (stringValue.length < 8) return "비밀번호는 최소 8자 이상이어야 합니다.";
  return null;
};

export const validateStudentId = (value: string | number) => {
  const stringValue = String(value);
  if (!stringValue) return "학번를 입력해주세요.";
  if (stringValue && !/^\d+$/.test(stringValue)) {
    return "유효한 학번을 입력해주세요.";
  }
  return null;
};

export const validateName = (value: string | number) => {
  const stringValue = String(value);
  if (!stringValue) return "이름을 입력해주세요.";
  if (!stringValue || stringValue.trim().length < 2) {
    return "이름은 최소 2글자 이상이어야 합니다.";
  }
  return null;
};
