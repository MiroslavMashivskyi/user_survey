import React from 'react';
import Interrogation_Container from './components/Interrogation_Container';
import { BrowserRouter, Route } from 'react-router-dom';
import Your_Result_Container from './components/Your_Result_Container';
import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/user_survey" render={() => <Interrogation_Container />} />
      <Route path="/result" render={() => <Your_Result_Container />} />
    </ BrowserRouter>
  );
}

export default App;