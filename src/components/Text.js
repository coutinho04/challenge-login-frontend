import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  text-align: ${({ align }) => align};
  ${(props) => {
    switch (props.type) {
      case 'title':
        return `color: ${props.theme.toreaBay}`;
      case 'subtitle':
        return `color: ${props.theme.portage}`;
      case 'paragraph':
        return `color: ${props.theme.portage}`;
    }
    return 'color: black';
  }};
  margin-bottom: 20px;

  @media (max-width: 600px) {
    ${(props) => {
      switch (props.type) {
        case 'title':
          return 'font-size: 24px; text-align: center; width: 150px; margin: 20px auto 20px auto;';
        case 'subtitle':
          return 'font-size: 14px; text-align: center;';
        case 'paragraph':
          return `font-size:14px; text-align: center; width: 250px; margin: 20px auto 20px auto; color: ${props.theme.white};`;
      }
    }};
  }
`;

export default function Text(props) {
  const { type, weight, size, align, description } = props;
  return (
    <>
      <StyledText type={type} weight={weight} size={size} align={align}>
        {description}
      </StyledText>
    </>
  );
}
