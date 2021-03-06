import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} />
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
      <Route path="/user">
        <p>Hello </p>
      </Route>
    </Router>
  );
}
