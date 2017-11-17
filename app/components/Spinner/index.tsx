import * as React from 'react';
const styled = require('styled-components').default;
const { keyframes } = require('styled-components');

const pulse = keyframes`
  0%, 40%, 100% { transform: scaleY(0.4) }
  20% { transform: scaleY(1.0) }

  0%, 40%, 100% {
    transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
  }
`;

const SpinWrapp = styled.div`
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  & > div {
    background-color: #333;
    height: 100%;
    width: 6px;
    margin-right: 5px;
    display: inline-block;
    animation: ${pulse} 1.2s infinite ease-in-out;
  }
`;

const Spinner: React.StatelessComponent<{}> = (): JSX.Element => (
  <SpinWrapp>
    <div />
    <div style={{ animationDelay: '-1.1s' }} />
    <div style={{ animationDelay: '-1.0s' }} />
    <div style={{ animationDelay: '-0.9s' }} />
  </SpinWrapp>
);

export { Spinner };
