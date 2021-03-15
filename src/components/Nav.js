import React, { useEffect } from 'react';
import { useForm } from '../hook/useForm';

import { findingCountryBySearchInput, findingCountryBySelectInput } from './helpers/findingCountries';

export const Nav = ({countriesList, setCountries}) => {
    
    const [ formValues, handleInputChange] = useForm({
        searchText: "",
        searchContinent: ""
    });

    const { searchText, searchContinent } = formValues;

    useEffect(() => {

        if(searchText === ""){
            setCountries(countriesList)
        } else {
            setCountries(findingCountryBySearchInput( countriesList, searchText?.toLowerCase() ));
        }

    }, [searchText, countriesList, setCountries])

    useEffect(() => {

        (searchContinent === "") ? setCountries(countriesList) : setCountries(findingCountryBySelectInput( countriesList, searchContinent?.toLowerCase() ));
        
    }, [searchContinent, countriesList, setCountries])

    return (
        <nav className="container">
            <div>
                <i className="fas fa-search"></i>
                <input 
                    type="search" 
                    placeholder="Search for the country..."
                    autoComplete="off"
                    name="searchText"
                    value={ searchText }
                    onChange={ handleInputChange }
                    />
            </div>  

            <select 
                name="searchContinent"
                onChange={ handleInputChange }
                >
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europa</option>
                <option value="oceania">Oceania</option>
            </select>
        </nav>
    )
}
