import styled from "styled-components";

const PrimaryButton = styled.button`
  margin-top: 30px;
  padding: 16px 68px;
  color: ${({ theme }) => theme.colors.text};
  font-family: "Poppins";
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  line-height: 12px;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export default PrimaryButton;
