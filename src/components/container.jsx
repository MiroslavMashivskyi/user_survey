import React from 'react';
import InterrogationContainer from './interrogation_Container';
import { BrowserRouter, Route } from 'react-router-dom';
import YuorResultContainer from './your_result_Container';

const Container = () =>  {
    return (
        <BrowserRouter>
            <Route exact path="/" render={() => <InterrogationContainer />} />
            <Route path="/result" render={() => <YuorResultContainer />} />
        </ BrowserRouter>
    ); 
}

export default Container;