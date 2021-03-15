export const findingCountryBySearchInput = (countriesList = [], searchValue) => {

    return countriesList.filter( country => {
        const { name } = country;

        return name.includes(searchValue);
    })
}

export const findingCountryBySelectInput = (countriesList = [], searchContinent) => {

    return countriesList.filter( country => {
        const { region } = country;

        return ( region.includes(searchContinent) )
    })
    
}