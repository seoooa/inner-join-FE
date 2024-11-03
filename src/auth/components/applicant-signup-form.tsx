import { useNavigate } from "react-router-dom";
import { Form, TFormFieldProps } from "../../common/ui";
import {
  validateEmail,
  validatePassword,
  validateStudentId,
  validateName,
} from "../utils/utils";

const fields: TFormFieldProps[] = [
  {
    label: "학번",
    value: "",
    type: "text",
    validate: validateStudentId,
  },
  {
    label: "이메일",
    value: "",
    type: "email",
    validate: validateEmail,
  },
  {
    label: "이름",
    value: "",
    type: "text",
    validate: validateName,
    helpText: "실명을 입력해주세요.",
  },
  {
    label: "비밀번호",
    value: "",
    type: "password",
    validate: validatePassword,
  },
];

export const ApplicantSignupForm = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (values: Record<string, string | number>) => {
    console.log(values);
    navigate("/verification");
  };

  return (
    <Form
      title="지원자 회원가입"
      fields={fields}
      onSubmit={handleFormSubmit}
      submitLabel="회원가입"
      additionalLink={{ label: "로그인", href: "/login" }}
    />
  );
};
