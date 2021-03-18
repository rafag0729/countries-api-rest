import React from 'react';
import { Link } from 'react-router-dom'

export const CountrySmall = ({name, flag, population, region, capital}) => {
    return (
        <li>
            <Link to={`/search/${name}`}>
                <img alt={ name } src={flag}/>
                        
                <div className="country_specs">
                    <h3>{ name }</h3>
                    <p><strong>Pupulation:</strong> { population } </p>
                    <p><strong>Region:</strong> { region }</p>
                    <p><strong>Capital:</strong> { capital }</p>
                </div>
            </Link>
        </li>
    )
}
