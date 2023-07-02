import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div>
            <NavLink to="/home">
                <button className={style.button}>Ingresar</button>
                </NavLink>
        </div>
    )
}

export default Landing;