import React from 'react';
import styled from 'styled-components';
import imgbg from '../assets/login-background.jpg';

const StyledImg = styled.img`
  background-image: url(${imgbg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100vh;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 50%);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: -webkit-linear-gradient(
    bottom,
    rgba(105, 57, 153, 0.1) 0%,
    rgba(19, 5, 37, 0.95) 100%
  );
  background: -o-linear-gradient(
    bottom,
    rgba(105, 57, 153, 0.1) 0%,
    rgba(19, 5, 37, 0.95) 100%
  );
  background: -ms-linear-gradient(
    bottom,
    rgba(105, 57, 153, 0.1) 0%,
    rgba(19, 5, 37, 0.95) 100%
  );
  background: -moz-linear-gradient(
    bottom,
    rgba(105, 57, 153, 0.1) 0%,
    rgba(19, 5, 37, 0.95) 100%
  );
  background: linear-gradient(
    to top,
    rgba(105, 57, 153, 0.1) 0%,
    rgba(19, 5, 37, 0.95) 100%
  );
  transform: rotate(-180deg);
  width: 50%;
  height: 100vh;

  @media (max-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: -webkit-linear-gradient(
      bottom,
      rgba(105, 57, 153, 0.1) 0%,
      rgba(19, 5, 37, 0.95) 65%
    );
    background: -o-linear-gradient(
      bottom,
      rgba(105, 57, 153, 0.1) 0%,
      rgba(19, 5, 37, 0.95) 65%
    );
    background: -ms-linear-gradient(
      bottom,
      rgba(105, 57, 153, 0.1) 0%,
      rgba(19, 5, 37, 0.95) 65%
    );
    background: -moz-linear-gradient(
      bottom,
      rgba(105, 57, 153, 0.1) 0%,
      rgba(19, 5, 37, 0.95) 65%
    );
    background: linear-gradient(
      to top,
      rgba(105, 57, 153, 0.1) 0%,
      rgba(19, 5, 37, 0.95) 65%
    );
    transform: rotate(-180deg);
  }
`;

export default function Img() {
  return (
    <>
      <StyledImg />
      <Gradient />
    </>
  );
}
