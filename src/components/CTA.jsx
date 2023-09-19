import { Link } from "gatsby-link";
import styled from "styled-components";

const CTA = styled(Link)`
  padding: 16px 39px;
  background-color: ${({ type, theme }) =>
    type === "outlined" ? "none" : theme.colors.primary};
  border: 2px solid
    ${({ type, theme }) =>
      type === "outlined" ? theme.colors.text : theme.colors.primary};
  line-height: 12px;
  display: inline-block;
  font-weight: 600;

  &:hover {
    color: unset;
    opacity: 0.8;
  }

  & + & {
    padding-left: 29px;
  }
`;

export default CTA;
