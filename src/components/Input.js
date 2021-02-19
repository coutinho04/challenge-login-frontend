import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media (max-width: 600px) {
    margin: auto 20px auto 20px;
  }
`;

const StyledLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.toreaBay};
  margin: 0 0 10px 10px;
`;

const StyledInput = styled.input`
  width: 256px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.portage};
  box-sizing: border-box;
  border-radius: 8px;
  padding-left: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.portage};
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.portage};
  }
  :-moz-placeholder {
    color: ${({ theme }) => theme.portage};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => theme.portage};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.portage};
  }

  ${(props) => {
    switch (!!props.error) {
      case true:
        return `border: 1px solid ${props.theme.wildStrawberry}`;
    }
    return `border: 1px solid ${props.theme.toreaBay}`;
  }};
`;

export default function Input(props) {
  const {
    type,
    weight,
    size,
    description,
    placeholder,
    onChange,
    error,
  } = props;

  const handleChange = ({ target }) => {
    onChange(target);
  };

  return (
    <>
      <StyledContainer>
        <StyledLabel htmlFor={type} weight={weight} size={size}>
          {description}
        </StyledLabel>
        <StyledInput
          type={type}
          name={type}
          id={type}
          placeholder={placeholder}
          onChange={handleChange}
          error={error}
        />
      </StyledContainer>
    </>
  );
}
