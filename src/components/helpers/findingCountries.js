export const findingCountryBySearchInput = (countriesList = [], searchText) => {

    return countriesList.filter( country => {
        const { name } = country;

        return name.includes(searchText);
    })
}

export const findingCountryBySelectInput = (countriesList = [], searchContinent) => {

    return countriesList.filter( country => {
        const { region } = country;

        return ( region.includes(searchContinent) )
    })
    
}