import * as React from 'react';
import Layout from 'components/Layout';
import SupaModule from 'modules/SupaModule';
import withData from 'client/data';
import { compose } from 'recompose';

const Module: React.StatelessComponent<{}> = (): JSX.Element => (
  <Layout>
    <SupaModule />
  </Layout>
);

export default compose(withData)(Module);
