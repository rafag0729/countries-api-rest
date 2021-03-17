import { countries } from "../../data/countriesCodes";

/* This function validates data  */
export const preparingSpecs = (data) => {

        return data.map((country) => {

            const {name, flag, nativeName, population, 
                region, subregion, capital, topLevelDomain, currencies, languages, borders} = country;

            
            const populationSet = addingDotsPopulation( population );
            
            const nameSet = name.toLowerCase();

            const regionSet = region.toLowerCase();

            const currenciesSet = currencies.map(({name}) => name);

            const langSet = languages.map(({name}) => name);
    
            const borderCountries = borders.map((country) => {
    
                return gettingCountry(country);
            })
            
            return {
                flag, nativeName, subregion, 
                capital, topLevelDomain,
                name: nameSet, 
                region: regionSet,
                population: populationSet,
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

const addingDotsPopulation = (population) => {

    const populationString = population.toString();
    const populationLength = populationString.length;

    let bPart = "";
    let mPart = ""; 
    let kPart = "";
    let firstPart = "";

    if( populationLength >= 10){

        bPart = populationString.slice(0, (populationLength - 9));
        mPart = populationString.substr((populationLength - 9), 3);
        kPart = populationString.substr((populationLength - 6), 3);
        firstPart = populationString.substr((populationLength - 3), 3);

        return `${bPart}.${mPart}.${kPart}.${firstPart}`;
    }

    if( populationLength >= 7){
        
        mPart = populationString.slice(0, (populationLength-6));
        kPart = populationString.substr((populationLength - 6), 3);
        firstPart = populationString.substr((populationLength - 3), 3);

        return `${mPart}.${kPart}.${firstPart}`;
    }
        

    if( populationLength >= 4){

        kPart = populationString.slice(0, (populationLength-3));
        firstPart = populationString.substr((populationLength - 3), 3);

        return `${kPart}.${firstPart}`;
    }
    
    return population;
}


