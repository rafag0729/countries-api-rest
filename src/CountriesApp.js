import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Header } from './components/Header';
import { AllCountries } from './components/AllCountries';
import { CountryDetail } from './components/CountryDetail';


import { ThemeContext } from './context/ThemeContext';

import './styles/main.scss';

export const CountriesApp = () => {

    const [lightMode, setLightMode] = useState(true);

    return (
        <ThemeContext.Provider value={{ lightMode, setLightMode}}>
            <Router>

                <Header/>

                <Switch>
                    <Route exact path="/AllCountries" component={ AllCountries} />

                    <Route exact path="/search/:country" component={ CountryDetail } />

                    <Route exact path="/" component={ AllCountries } />

                    <Redirect to="/AllCountries"/>
                </Switch>

            </Router>
        </ThemeContext.Provider>
    )
}
