import { useState } from "react";
import styled from "styled-components";

type VerificationCodeFieldProps = {
  label: string;
  onChange: (code: string) => void;
  error?: string | null;
};

export const VerificationCodeField = ({
  label,
  onChange,
  error,
}: VerificationCodeFieldProps) => {
  const [values, setValues] = useState(Array(6).fill(""));

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = event.target.value;
    if (/^[0-9]?$/.test(newValue)) {
      const newValues = [...values];
      newValues[index] = newValue;
      setValues(newValues);
      onChange(newValues.join(""));

      if (newValue && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <FieldWrapper>
      <FieldLabel>{label}</FieldLabel>
      <InputWrapper>
        {values.map((value, index) => (
          <SingleInput
            key={index}
            id={`code-${index}`}
            type="text"
            value={value}
            maxLength={1}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            $isError={!!error}
          />
        ))}
      </InputWrapper>
      {error && <FieldError>{error}</FieldError>}
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FieldLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const SingleInput = styled.input<{ $isError: boolean }>`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$isError ? "red" : "#ddd")};
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${(props) =>
      props.$isError ? "red" : props.theme.color.primary};
  }
`;

const FieldError = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
