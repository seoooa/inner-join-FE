import { Form, TFormFieldProps } from "../../common/ui";
import { validatePassword, validateStudentId } from "../utils/utils";

const fields: TFormFieldProps[] = [
  {
    label: "학번",
    value: "",
    type: "text",
    validate: validateStudentId,
  },
  {
    label: "비밀번호",
    value: "",
    type: "password",
    validate: validatePassword,
  },
];

export const ApplicantLoginForm = () => {
  const handleFormSubmit = (values: Record<string, string | number>) => {
    console.log(values);
  };

  return (
    <Form
      title="지원자 로그인"
      fields={fields}
      onSubmit={handleFormSubmit}
      submitLabel="로그인"
      additionalLink={{ label: "회원가입", href: "/signup" }}
    />
  );
};
