import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, getCountryByName } from "../../redux/actions/actions";
import style from "./SearchBar.module.css";

const SearchBar = ({ handleFilter }) => {
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
            handleFilter()
        }
    };

    return(
        <div className={style.container}>
            <form onSubmit={handleOnSubmit}>
            <input 
            className={style.input}
            type="text"
            placeholder="Type here to search countries..."
            value={searchCountry}
            onChange={handleChange}
            />
            <button type="submit" className={style.searchButton}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;