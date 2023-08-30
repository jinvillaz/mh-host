import { styled } from 'styled-components'

export const Button = styled.button`
  background-color: hsla(40, 72%, 50%, 1);
  border: 1px solid hsla(40, 72%, 60%, 1);
  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 20px;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: hsla(40, 72%, 60%, 1);
  }

  &:active {
    background-color: hsla(40, 72%, 35%, 1);
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`
