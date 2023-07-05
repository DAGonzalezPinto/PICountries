import Card from "../Card/Card.component.jsx";
import style from "./Cards.module.css";

const Cards = ({allCountries}) =>{
    const countries = allCountries;
    return (
        <div className={style.cardsContainer}>
            {countries?.map(({id, name, flag, continent}) => 
            <Card 
            key={id}
            id={id}
            name= {name}
            flag={flag}
            continent={continent}
            />
            )}
        </div>
    )
}

export default Cards;