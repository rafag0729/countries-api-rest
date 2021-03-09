import React from 'react'

export const CountryDetail = () => {
    return (
        <div className="country_detail container">
            <div>
                <img alt="Country name"/>
            </div>
            <div className="country_specs">
                <h2>Country name</h2>

                <div>
                    <div>
                        <p><strong>Native name:</strong> Native name</p>
                        <p><strong>Population:</strong> 1.234.567</p>
                        <p><strong>Region:</strong> Region</p>
                        <p><strong>Sub Region:</strong> Sub Region</p>
                        <p><strong>Capital:</strong> Capital</p>
                    </div>
                    <div>
                        <p><strong>Top Level Domain:</strong> Top Level Domain</p>
                        <p><strong>Currencies:</strong> Currencies</p>
                        <p><strong>Languages:</strong> Languages</p>
                    </div>
                </div>
                

                <p><strong>Border Countries:</strong></p>
                <span>Country1</span>
                <span>Country2</span>
                <span>Country3</span>
            </div>
        </div>
    )
}
