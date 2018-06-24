import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Docs from '../components/Docs';
import { componentData } from './componentData.js';
import { routes } from './routes.js';

const rootPath = process.env.NODE_ENV === 'production' ? 'quark-components' : '';

const App = () => {
  return (
    <Router basePath={rootPath}>
      <Docs
        data={componentData}
        headerTitle="Quark Components"
        menuTitle="Components"
        linkType="routerLink"
      >
        { routes }
      </Docs>
    </Router>
  );
};

export default App;
