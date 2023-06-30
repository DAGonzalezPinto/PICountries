import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_DETAIL } from "./action-types";
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
}

export const getCountryDetail = (id) => {
    return async function(dispatch){
        const countryDetail = await axios.get(`http://localhost:3001/countries/${id}`);
        const country = countryDetail.data
        dispatch({
            type: GET_COUNTRY_DETAIL,
            payload: country
        })
    }
}

