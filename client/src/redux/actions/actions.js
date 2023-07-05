import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_DETAIL, FILTER_BY_CONTINENTS, SORT_BY_POPULATION, SORT_BY_ALPHABET, FILTER_BY_ACTIVITIES, CREATE_ACTIVITY } from "./action-types";
import axios from "axios";

export const getAllCountries = () => {
    return async function (dispatch) {
        const getApiCountries = await axios.get("http://localhost:3001/countries");
        const countries = getApiCountries.data.map((country) => {
            return{
                id: country.id,
                name: country.name,
                flag: country.flag,
                continent: country.continent,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                activities: country.Activities,
                maps: country.maps

            }
        })
        dispatch({
            type: GET_ALL_COUNTRIES,
            payload: countries
        })
    }
};

export const getCountryByName = (name) =>{
    return async function(dispatch){
        const getApiCountry = await axios.get(`http://localhost:3001/countries/country?name=${name}`);
        const country = getApiCountry.data
        console.log(country);
        dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: country
        })
    }
};

export const getCountryDetail = (id) => {
    return async function(dispatch){
        const countryDetail = await axios.get(`http://localhost:3001/countries/${id}`);
        const country = countryDetail.data
        dispatch({
            type: GET_COUNTRY_DETAIL,
            payload: country
        })
    }
};

export const filterByContinents = (continent) => {
    return function(dispatch){
        dispatch({
            type: FILTER_BY_CONTINENTS,
            payload: continent
        })
    }
};

export const filterByActivities = (activity) => {
    return function(dispatch){
        dispatch({
            type: FILTER_BY_ACTIVITIES,
            payload: activity
        })
    }
}

export const sortByPopulation = (order) => {
    return function(dispatch){
        dispatch({
            type: SORT_BY_POPULATION,
            payload: order
        })
    }
};

export const sortByAlphabet = (order) => {
    return function(dispatch){
        dispatch({
            type: SORT_BY_ALPHABET,
            payload: order
        })
    }
};

export function createActivity(activityInfo) {
    return async (dispatch) => {
        await axios.post("http://localhost:3001/activities", activityInfo).then(result =>{
            return dispatch({
                type: CREATE_ACTIVITY,
                payload: result
            })
        })
    }
} ;




