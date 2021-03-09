import { countries } from "../../data/countriesCodes";


export const preparingSpecs = ([data]) => {
            
        const {name, flag, nativeName, population, 
            region, subregion, capital, topLevelDomain, currencies, languages, borders} = data;

        /* Validating entry data */
        let errors = {};

        if(typeof name != 'string'){
            errors = {
                ...errors,
                name: 'The name has no valid syntax'
            }
        }

        if(typeof flag != 'string'){
            errors = {
                ...errors,
                flag: 'The flag-src has no valid syntax'
            }
        }

        if(typeof nativeName != 'string'){
            errors = {
                ...errors,
                nativeName: 'The native-name has no valid syntax'
            }
        }

        if(typeof population != 'number'){
            errors = {
                ...errors,
                population: 'The population is not a valid number'
            }
        }

        if(typeof region != 'string'){
            errors = {
                ...errors,
                region: 'The region has no valid syntax'
            }
        }

        if(typeof subregion != 'string'){
            errors = {
                ...errors,
                name: 'The sub-region has no valid syntax'
            }
        }

        if(typeof capital != 'string'){
            errors = {
                ...errors,
                name: 'The capital has no valid syntax'
            }
        }

        if(typeof topLevelDomain != 'object'){
            errors = {
                ...errors,
                topLevelDomain: 'The top-level-domain is not a valid array'
            }
        }
        
        if(typeof currencies != 'object'){
            errors = {
                ...errors,
                currencies: 'The top-level-domain is not a valid array'
            }
        }

        if(typeof languages != 'object'){
            errors = {
                ...errors,
                languages: 'The languages are not a valid array'
            }
        }

        if(typeof borders != 'object'){
            errors = {
                ...errors,
                borders: 'The border-countries are not a valid array'
            }
        }

        if(errors.length >= 1){
            return errors;
        } 

        const currenciesSet = currencies.map(({name}) => name);

        const langSet = languages.map(({name}) => name);

        const borderCountries = borders.map((country) => {

            return gettingCountry(country);
        })

        
        return {
            name, flag, nativeName, population, 
            region, subregion, capital, topLevelDomain, 
            currencies: currenciesSet, 
            languages: langSet, 
            borders: borderCountries
        }        

    }
        
const gettingCountry = (toGet) => {
    
    for( let element of countries ){

        const {name, alpha3Code} = element;
        
        if(alpha3Code === toGet){

            return name;
        }
    }
}


