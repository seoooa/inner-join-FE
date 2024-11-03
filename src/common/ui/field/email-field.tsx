import styled from "styled-components";
import { FieldBase } from "./field-base";

type TEmailFieldProps = {
  label?: string;
  value: string;
  helpText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
};

export const EmailField = ({
  label,
  value,
  helpText,
  onChange,
  error,
}: TEmailFieldProps) => {
  return (
    <FieldBase label={label} helpText={helpText} errorMessage={error}>
      <StyledEmailField
        type="email"
        value={value}
        onChange={onChange}
        $isError={!!error}
      />
    </FieldBase>
  );
};

const StyledEmailField = styled.input<{
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
