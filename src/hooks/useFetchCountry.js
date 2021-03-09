import { useEffect } from "react";

export const useFetchCountry = (endpoint) => {

    useEffect(() => {
        

        const countries = new Promise((res) => {

            fetch(endpoint)
            .then(res => res.json())
            .then(countries => (countries))
            .catch(e => console.log(e));
        })
        
        
    }, [])
    
}
