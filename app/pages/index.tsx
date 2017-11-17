import * as React from 'react';
// Require styled to avoid the issue https://github.com/styled-components/styled-components/issues/1168 on page reload
const styled = require('styled-components').default;
import Layout from 'components/Layout';

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & img {
    max-height: 200px;
  }
`;

export default (): JSX.Element => (
  <Layout>
    <h1>Hello!</h1>
    <Image>
      <img src="/static/img/hipsta.png" alt="hipsta" />
    </Image>
  </Layout>
);
