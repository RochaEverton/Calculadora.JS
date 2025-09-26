import styled from "styled-components";
import Image from "next/image";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  color: #61dafb;
  font-size: 24px;
  margin: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Calculadora</Title>
      <Image src="/LOGO.png" alt="Logo" width={50} height={50} />
    </HeaderContainer>
  );
}
