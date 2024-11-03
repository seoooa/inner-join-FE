import styled from "styled-components";

type TFieldBaseProps = {
  label?: string;
  errorMessage?: string | null;
  helpText?: string;
  children: React.ReactNode;
};

export const FieldBase = ({
  label,
  errorMessage,
  helpText,
  children,
}: TFieldBaseProps) => {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputContainer>{children}</InputContainer>
      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        helpText && <HelpText>{helpText}</HelpText>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 8px;
  margin-left: 8px;
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: 0.875rem;
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
  margin-left: 10px;
`;

const HelpText = styled.div`
  color: #6c757d;
  font-size: 0.875rem;
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
  margin-left: 10px;
`;
