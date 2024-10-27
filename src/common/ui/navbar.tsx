import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        로고
      </Logo>
      <ButtonGroup>
        <Button
          label="로그인"
          onClick={() => {
            navigate("/login");
          }}
        />
        <Button
          label="회원가입"
          variant="secondary"
          onClick={() => {
            navigate("/signup");
          }}
        />
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 40px;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled.span`
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;
