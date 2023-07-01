import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_DETAIL, FILTER_BY_CONTINENTS, SORT_BY_ALPHABET, SORT_BY_POPULATION } from "./actions/action-types";

const initialState = {
    countries: [],
    copyCountries: [],
    country: {}
}

const reducer = (state = initialState, { type, payload }) =>{
    switch(type){
        case GET_ALL_COUNTRIES:
            return{
                ...state, 
                countries: payload,
                copyCountries: payload
            }
        case GET_COUNTRY_BY_NAME:
            return{
                ...state,
                countries: payload
            }
        case GET_COUNTRY_DETAIL:
            return{
                country: payload
                }
        case FILTER_BY_CONTINENTS:
            const filteredCountries = state.countries.filter(country => country.continent === payload)
            return{
                ...state,
                countries: filteredCountries
            }
        case SORT_BY_POPULATION:
            const sortedByPopulation = [...state.countries].sort((a, b) => {
                if (payload === "ascendant"){
                    return a.population - b.population
                }
                else{
                    return b.population - a.population
                }
            })
            return{
                ...state,
                countries: sortedByPopulation
            }
        case SORT_BY_ALPHABET:
            const sortedByAlphabet = [...state.countries].sort((a,b) => {
                if(payload === "ascendant"){
                    return a.name.localeCompare(b.name)
                }
                else{
                    return b.name.localeCompare(a.name)
                }
            })
            return{
                ...state,
                countries: sortedByAlphabet
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;