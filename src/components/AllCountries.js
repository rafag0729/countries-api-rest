import React, { useEffect, useState } from 'react';
import { useFetchCountry } from '../hooks/useFetchCountry';
import { CountrySmall } from './CountrySmall';
import { Nav } from './Nav';

export const AllCountries = () => {

    const [countries, setCountries] = useState();

    useEffect(() => {

        fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;capital;population;region')
            .then( data => data.json())
            .then( countries => 
                setCountries(countries))

            .catch(e => console.log(e));
    }, [countries])

    return (
        <>
            <Nav></Nav>
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
