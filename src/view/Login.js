import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Img from '../components/Img';

const StyledLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Login() {
  return (
    <>
      <StyledLogin>
        <Img />
        <Form />
      </StyledLogin>
    </>
  );
}
