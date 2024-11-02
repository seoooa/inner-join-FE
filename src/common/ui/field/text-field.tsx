import styled from "styled-components";
import { FieldBase } from "./field-base";

type TTextFieldProps = {
  label?: string;
  value: string;
  helpText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string | null;
};

export const TextField = ({
  label,
  value,
  helpText,
  onChange,
  type = "text",
  error,
}: TTextFieldProps) => {
  return (
    <FieldBase label={label} helpText={helpText} errorMessage={error}>
      <StyledTextField
        type={type}
        value={value}
        onChange={onChange}
        $isError={!!error}
        placeholder=" "
      />
    </FieldBase>
  );
};

const StyledTextField = styled.input<{
  $isError: boolean;
}>`
  width: calc(100% - 20px);
  padding: 20px 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.$isError ? "red" : "#ddd")};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.color.primary};
  }
`;
