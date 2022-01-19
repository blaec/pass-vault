import React from 'react';

import Layout from "./hoc/Layout";

function App() {
  const layout = (
      <Layout>
      </Layout>
  );

  return (
    <React.Fragment>
      {layout}
    </React.Fragment>
  );
}

export default App;
