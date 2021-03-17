import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import { Link } from 'react-router-dom';


export const Header = () => {

    const {lightMode, setLightMode} = useContext(ThemeContext)
    
    const body = document.querySelector("body");

    const switchTheme = () => {

        body.classList.toggle('dark_mode');
        setLightMode(!lightMode);
    }

    return (
        <div className="fixed_elements container">
            <header>
                <div>
                    <Link to="/">
                        <p>Where in the world?</p>
                    </Link>

                    <p
                        className="switch_theme"
                        onClick={ switchTheme }
                    >
                        {
                            (lightMode) 
                                ? <i className="far fa-moon"></i> 
                                : <i className="fas fa-moon"></i> 
                        } Dark mode
                    </p>
                </div>
            </header>
        </div>
    )
}
