import styled from "styled-components";

interface Props{
	outlined?: boolean;
}

const Button = styled.button<Props>`
  display: inline-block;

  border: 1px solid var(--white);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 16px 24px;

  color: var(--white);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  outline: none;

  cursor: pointer;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background: var(--primary);
    border-radius: 0;
    border: 0;

    text-align: center;
  }
`;

export { Button };