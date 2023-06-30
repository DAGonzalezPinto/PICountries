import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_DETAIL } from "./actions/action-types";

const initialState = {
    countries: [],
    country: {}
}

const reducer = (state = initialState, { type, payload }) =>{
    switch(type){
        case GET_ALL_COUNTRIES:
            return{
                ...state, 
                countries: payload
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
        default:
            return{
                ...state
            }
    }
}

export default reducer;