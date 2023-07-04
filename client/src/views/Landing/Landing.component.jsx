import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div>
        <div className={style.overlay}>
        <div>
            <div className={style.projectTitleContainer}>
                <h1 className={style.projectTitle}>Countries</h1>
            </div>
            <div className={style.textContainer}>
            <p className={style.textp}>Here you can search any country or discorver those countries that you didn´t know, also order or filter them as you wish.</p>
            <p className={style.textp}>You can also see each country detail and create activities and associate them to one or more countries.</p>
            </div>
            <div className={style.buttonContainer}>
            <NavLink to="/home">
                <button className={style.landingButton}>Let's see!</button>
                </NavLink>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Landing;