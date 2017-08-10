import * as React from 'react';
import Layout from 'components/Layout';
import Marvel from 'modules/Marvel';
import withData from 'client/data';
import { compose } from 'recompose';

const Module: React.StatelessComponent<any> = ({ url: { query } }): JSX.Element => (
  <Layout>
    <Marvel query={query} />
  </Layout>
);

export default compose(withData)(Module);
