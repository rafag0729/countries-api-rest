import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
                    <Route path="/AllCountries" component={ AllCountries} />

                    <Route path="/CountryDetail" component={ CountryDetail } />

                    <Route path="/" component={ AllCountries } />
                </Switch>

            </Router>
        </ThemeContext.Provider>
    )
}
