import { Form, TFormFieldProps } from "../../common/ui";
import { validateClubName, validatePassword } from "../utils/utils";

const fields: TFormFieldProps[] = [
  {
    label: "동아리명",
    value: "",
    type: "text",
    validate: validateClubName,
  },
  {
    label: "비밀번호",
    value: "",
    type: "password",
    validate: validatePassword,
  },
];

export const ManagerLoginForm = () => {
  const handleFormSubmit = (values: Record<string, string | number>) => {
    console.log(values);
  };

  return (
    <Form
      title="관리자 로그인"
      fields={fields}
      onSubmit={handleFormSubmit}
      submitLabel="로그인"
      additionalLink={{ label: "회원가입", href: "/signup" }}
    />
  );
};
