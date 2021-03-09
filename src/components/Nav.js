import React from 'react'

export const Nav = () => {
    return (
        <nav>
            <div>
                <i className="fas fa-search"></i>
                <input type="search" placeholder="Search for the country..."/>
            </div>
            

            <select>
                <option value="">Filter by Region</option>
                <option>Region1</option>
                <option>Region2</option>
                <option>Region3</option>
                <option>Region4</option>
                <option>Region5</option>
            </select>
        </nav>
    )
}
