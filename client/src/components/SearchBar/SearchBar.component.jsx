import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, getCountryByName } from "../../redux/actions/actions";

const SearchBar = () => {
    const [searchCountry, setSearchCountry] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => { 
        if(event.target.value ===""){
            dispatch(getAllCountries()) 
        }
        setSearchCountry(event.target.value) 
    };

    const handleSearch = () => {
        dispatch(getCountryByName(searchCountry)) 
    };

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        if(searchCountry.length !== 0){
            handleSearch();
        }
    };

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
            <input 
            type="text"
            className= "input-searchbar"
            placeholder="Buscar un pais..."
            value={searchCountry}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;