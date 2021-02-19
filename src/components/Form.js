import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Text from './Text';
import validate from '../helpers/validateInfo';
import useForm from '../services/useForm';

const StyledForm = styled.div`
  background-color: ${({ theme }) => theme.gainsboro};
  width: 50%;
  height: 100vh;

  @media (max-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 250px auto;
  width: 256px;
  height: 495px;

  @media (max-width: 600px) {
    position: relative;
    width: 311px;
    height: 357px;
    margin: 180px auto;
    background: ${({ theme }) => theme.magnolia};
    border-radius: 8px;

    ${(props) => {
      const hasEmailError = props.errors.email !== undefined;
      const hasPasswordError = props.errors.password !== undefined;
      if ((hasEmailError === true) & (hasPasswordError === true)) {
        return 'height: 381px;';
      } else if ((hasEmailError === true) | (hasPasswordError === true)) {
        return 'height: 368px';
      } else {
        return 'height: 357px;';
      }
    }};
  }
`;

const Wrapper = styled.div`
  margin-top: 50px;
  padding-top: 15px;
`;

const Error = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: ${({ theme }) => theme.wildStrawberry};
  margin: -10px 0 20px 20px;
  @media (max-width: 600px) {
    font-size: 10px;
    margin: -15px 0 10px 35px;
    background-color: white;
  }
`;

export default function Form() {
  const { handleSubmit, handleChange, values, errors } = useForm(validate);

  return (
    <>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <StyledContainer errors={errors}>
            <Wrapper>
              <Text
                type="title"
                weight="400"
                size="40px"
                description="Olá, seja bem-vindo!"
              ></Text>
              <Text
                type="subtitle"
                weight="600"
                size="16px"
                description="Para acessar a plataforma, faça seu login."
              ></Text>
            </Wrapper>
            <Input
              type="email"
              weight="400"
              size="10px"
              description="E-MAIL"
              placeholder="user.name@mail.com"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            ></Input>
            {errors.email && <Error>{errors.email}</Error>}
            <Input
              type="password"
              weight="400"
              size="10px"
              description="SENHA"
              placeholder="*******"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            ></Input>
            {errors.password && <Error>{errors.password}</Error>}
            <Button type="submit" description="ENTRAR"></Button>
            <Text
              type="paragraph"
              weight="400"
              size="14px"
              align="center"
              description="Esqueceu seu login ou senha? Clique aqui"
            ></Text>
          </StyledContainer>
        </form>
      </StyledForm>
    </>
  );
}
