import React, { useEffect, useRef, useState } from 'react';

import { Nav } from './Nav';
import { CountrySmall } from './CountrySmall';

import { preparingSpecs } from './helpers/preparingSpecs';

export const AllCountries = () => {

    const [countries, setCountries] = useState([]);
    /* We need to use Reference to be passed to Nav, since modifying it can cause render issues*/
    const countriesRef = useRef()

    useEffect(() => {

        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(countries => {

                countriesRef.current = preparingSpecs(countries);
                setCountries(preparingSpecs(countries));
            })
            .catch(e => console.log(e));

    }, [])

    return (
        <>
            <Nav 
                countriesList={ countriesRef.current } 
                setCountries={ setCountries } />

            <article className="container">
                {
                    countries &&
                        countries.map( ({name, flag, capital, region, population }, id) => (
                            <CountrySmall
                                key={id}
                                name={name}
                                flag={flag}
                                capital={capital}
                                region={region}
                                population={population}
                            />)
                        )
                }
            </article>
        </>
    )
}
