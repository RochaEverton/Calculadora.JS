import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: right;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

export default function Input({ value }) {
  return <StyledInput type="text" disabled value={value} />;
}
