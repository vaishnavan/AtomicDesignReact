import styled from "styled-components";

export const DefaultButton = styled.button`
  padding: 10px 30px;
  font-size: 18px;
  border: none;
  width: 100%;
  border-radius: 0.25rem;
  &:hover {
    cursor: pointer;
  }
  &.primary {
    background: blue;
  }
  &.secondary {
    background: yellow;
  }
  &.secondary:hover {
    background: gray;
  }
  &.success {
    background: green;
  }
  &.danger {
    background: red;
  }
`;
