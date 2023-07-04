import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_DETAIL, FILTER_BY_CONTINENTS, SORT_BY_ALPHABET, SORT_BY_POPULATION, FILTER_BY_ACTIVITIES, CREATE_ACTIVITY } from "./actions/action-types";

const initialState = {
    countries: [], 
    copyCountries: [],
    allActivities: [],
    country: {}
}

const reducer = (state = initialState, { type, payload }) =>{
    switch(type){
        case GET_ALL_COUNTRIES:
            return{
                ...state, 
                countries: payload,
                copyCountries: payload,
                allActivities: payload
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
            if(payload){
                const filteredCountries = payload === "all" ? state.copyCountries :state.copyCountries.filter(country => country.continent === payload)
                return{
                ...state,
                countries: filteredCountries
                }
            }
            return{
                ...state
            }
        case FILTER_BY_ACTIVITIES:
            const filteredActivities = payload === "all" ? state.copyCountries : state.copyCountries.filter(country => {
                let mappedActivities = country.activities?.map(activity => activity.name)
                if(mappedActivities.includes(payload)){
                    return country
                }
            })
            return{
                ...state,
                countries: filteredActivities
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
        case CREATE_ACTIVITY:
            return {
                ...state
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;