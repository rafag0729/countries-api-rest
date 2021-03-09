import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Nav } from './Nav';

export const Header = () => {

    const {lightMode, setLightMode} = useContext(ThemeContext)
    /* const switchTheme = useRef(null); */
    const body = document.querySelector("body");

    const switchTheme = () => {

        body.classList.toggle('dark_mode');
        setLightMode(!lightMode);
    }


    
    return (
        <div className="fixed_elements container">
            <header>
                <div>
                    <p>Where in the world?</p>

                    <p
                        className="switch_theme"
                        onClick={ switchTheme }
                    >
                        {
                            (lightMode) 
                                ? <i className="far fa-moon">{/* Light mode */}</i> 
                                : <i className="fas fa-moon">{/* Dark mode */}</i> 
                                
                        } Dark mode
                    </p>
                </div>
            </header>
        </div>
    )
}
