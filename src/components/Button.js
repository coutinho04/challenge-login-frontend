import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 256px;
  height: 48px;
  margin: 0 0 25px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.white};
  outline: none;
  background: linear-gradient(
    267.79deg,
    ${({ theme }) => theme.toreaBay} 0%,
    ${({ theme }) => theme.darkOrchid} 99.18%
  );
  box-shadow: 0px 10px 25px ${({ theme }) => theme.wisteria};
  border-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme.darkOrchid};
    cursor: pointer;
  }

  @media (max-width: 600px) {
    margin: 5px 70px 10px;
    width: 168px;
    height: 48px;
    box-shadow: none;
  }
`;

export default function Button({ description, type }) {
  return (
    <>
      <StyledButton type={type}>{description}</StyledButton>
    </>
  );
}
