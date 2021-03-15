import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import { preparingSpecs } from './helpers/preparingSpecs';

export const CountryDetail = () => {

    const {country} = useParams();
    const [specs, setSpecs] = useState([{
        name: undefined, flag: undefined, nativeName:undefined, population:undefined, region:undefined, 
        subregion: undefined, capital:undefined, topLevelDomain:undefined, 
        currencies: undefined, languages:undefined, borders:undefined}]);
    
    const [{ name, flag, nativeName, population, region, subregion, 
        capital, topLevelDomain, currencies, languages, borders }] = specs;
        
    useEffect(() => {
    
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then( data => data.json())
            .then( countrySpecs => {
                
                setSpecs((preparingSpecs(countrySpecs)))
            })
            .catch(e => console.log(e));
            
    }, [country]);

    
    return (
        <div className="container">
            <Link to="/AllCountries">
                <button> <span>&#8592;</span> Back</button>
            </Link>
            
            {
                name && 
                    <div className="country_detail">
                        <div>
                            <img alt={ name } src={ flag } />
                        </div>
                        <div className="country_specs">
                            <h2> { name } </h2>

                            <div>
                                <div>
                                    <p><strong>Native name:</strong> { nativeName }</p>
                                    <p><strong>Population:</strong> { population } </p>
                                    <p><strong>Region:</strong> { region }</p>
                                    <p><strong>Sub Region:</strong> { subregion } </p>
                                    <p><strong>Capital:</strong> { capital } </p>
                                </div>
                                <div>
                                    <p>
                                        <strong>Top Level Domain: </strong> 
                                        { topLevelDomain.join(" - ") } 
                                    </p>
                                    <p>
                                        <strong>Currencies: </strong> 
                                        { currencies.join(", ") } 
                                    </p>
                                    <p>
                                        <strong>Languages: </strong> 
                                        { languages.join(", ")}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="border_countries"> 
                                <p><strong>Border Countries: </strong></p>
                                <div>
                                {
                                    borders.map((country, i) => (
                                        <span
                                            key={ i }
                                            > 
                                        { country } 
                                        </span>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
            }   
        </div>
    )
}
