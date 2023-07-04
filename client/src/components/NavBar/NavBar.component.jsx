import SearchBar from "../SearchBar/SearchBar.component";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ handleFilter }) =>{
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img className={style.image} src="https://www.pngkit.com/png/full/335-3354725_international-white-transparent-country-icon-png-white.png" alt="" />
                <h2 className={style.text}>Countries</h2>
            </div>
            <div>
            <SearchBar handleFilter={handleFilter}/>
            </div>
            <div className={style.buttonContainer}>
                <NavLink to="/createactivity">
                    <button className={style.formButton}>Create Activity</button>
                </NavLink>
            </div>
        </div>       
    )
}

export default NavBar;