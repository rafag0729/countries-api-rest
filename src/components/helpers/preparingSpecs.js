import { countries } from "../../data/countriesCodes";

/* This function validates data  */
export const preparingSpecs = (data) => {

        return data.map((country) => {

            const {name, flag, nativeName, population, 
                region, subregion, capital, topLevelDomain, currencies, languages, borders} = country;
            
            const nameSet = name.toLowerCase();

            const regionSet = region.toLowerCase();

            const currenciesSet = currencies.map(({name}) => name);

            const langSet = languages.map(({name}) => name);
    
            const borderCountries = borders.map((country) => {
    
                return gettingCountry(country);
            })
    
            
            return {
                flag, nativeName, population, 
                subregion, capital, topLevelDomain,
                name: nameSet, 
                region: regionSet,
                currencies: currenciesSet, 
                languages: langSet, 
                borders: borderCountries
            }        
        })     
}

const gettingCountry = (toGet) => {
    
    for( let element of countries ){

        const {name, alpha3Code} = element;
        
        if(alpha3Code === toGet){

            return name;
        }
    }
}


