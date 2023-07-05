
import { useEffect } from "react";
import { getCountryDetail } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [id]);

  const countryDetail = useSelector((state) => state.country);

  const handleBackToHome = () => {
    window.location.href = "/home"; // Redirige a la página de inicio y la recarga
  };

  if (countryDetail && countryDetail.length > 0) {
    return (
      <div className={style.container} key={countryDetail[0].id}>
        <div className={style.detailContainer}>
          <div className={style.titleContainer}>
            <h1 className={style.title}>Details of {countryDetail[0].name}</h1>
          </div>
          <div>
            <button className={style.homeButton} onClick={handleBackToHome}>
              Back to Home
            </button>
          </div>
<div>
            <img className={style.flag} src={countryDetail[0].flag} alt={countryDetail[0].name} />
          </div>
          <div className={style.textContainer}>
            <h3 className={style.textStyles}>Capital: {countryDetail[0].capital}</h3>
            <h3 className={style.textStyles}>Continent: {countryDetail[0].continent}</h3>
            <h3 className={style.textStyles}>Subregion: {countryDetail[0].subregion}</h3>
            <h3 className={style.textStyles}>Area: {countryDetail[0].area} km2</h3>
            <h3 className={style.textStyles}>Population: {countryDetail[0].population}</h3>
            <h3 className={style.textStyles}>
              Google Maps: <NavLink className={style.navLink} to={countryDetail[0].maps}>Click here!</NavLink>
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    return <div><img className={style.loadingImg} src="https://www.pngkit.com/png/full/335-3354725_international-white-transparent-country-icon-png-white.png"/></div>;
  }
};

export default Detail;