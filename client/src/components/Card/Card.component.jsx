import style from "./Card.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ id, name, flag, continent}) =>{
    return(
        <div>
        <NavLink className={style.links} to={`/detail/${id}`} >
        <div className={style.container}>
            <div className={style.nameContainer}>
            <h2 className={style.countryName}> {name} </h2>
            </div>
            <img className={style.countryImg}src={flag}/>
            <div className={style.continentContainer}>
            <h2 className={style.continentName}> {continent} </h2>
            </div>
            
        </div>
        </NavLink>
        </div>
    )
}

export default Card;