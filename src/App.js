import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import { Informativo, H1face, Pface } from './components/Informativo';
import FormNew from './components/FormNew';

function App() {
  return (
    <Main>
      <Informativo>
        <H1face>facebook</H1face>
        <Pface>
          O Facebook ajuda-te a comunicar e a partilhar com as pessoas que fazem
          parte da tua vida.
        </Pface>
      </Informativo>

      <FormNew />
    </Main>
  );
}

export default App;
