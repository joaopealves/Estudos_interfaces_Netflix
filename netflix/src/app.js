import React from 'react';
import { Accordion } from './components';
import { FooterContainer } from './containers/footer';

import { JumbotronContainer } from './containers/jumbotron';

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
      <Accordion />
    </>
  );
}
