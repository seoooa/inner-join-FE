import { Form, TFormFieldProps } from "../../common/ui";

const fields: TFormFieldProps[] = [
  {
    label: "이메일로 받은 인증코드를 입력해주세요",
    value: "",
    type: "verificationCode",
  },
];

export const VerificationCodeForm = () => {
  return (
    <Form
      title="인증 코드 입력"
      fields={fields}
      onSubmit={() => {}}
      submitLabel="인증"
    />
  );
};
