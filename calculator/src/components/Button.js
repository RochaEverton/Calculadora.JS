import styled from "styled-components";

const StyledButton = styled.button`
  flex: 1;
  height: 50px;
  margin: 3px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  background-color: #61dafb;
  color: #20232a;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #21a1f1;
  }
`;

export default function Button({ label, onClick }) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}
