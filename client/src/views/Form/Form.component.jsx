import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, createActivity } from "../../redux/actions/actions";
import { validateForm } from "./FormValidation";
import { useNavigate, NavLink } from "react-router-dom";
import style from "./Form.module.css";

function Form() {
    const [errors, setErrors] = useState('');
    const [showErrors, setShowErrors] = useState(false);
    const [activityInfo, setActivityInfo] = useState({
        name: "",
        difficulty: 1,
        duration: 1,
        season: "",
        countries: [],
    });

    const allCountries = useSelector(state => state.countries);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const handleSelect = (event) => {
        if (activityInfo.countries.includes(event.target.value)) {
            console.log("Ya has añadido este país!");
        } else {
            setActivityInfo({
                ...activityInfo,
                countries: [...activityInfo.countries, event.target.value],
            });
        }
    }

    function handleChange(event) {
        setActivityInfo({
            ...activityInfo,
            [event.target.name]: event.target.value
        });
    }

    function handleChoose(event) {
        setActivityInfo({
            ...activityInfo,
            [event.target.name]: event.target.value
        });
    }

    function handleRemove(event) {
        setActivityInfo({
            ...activityInfo,
            countries: activityInfo.countries.filter(country => (country !== event.target.value))
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validateForm(activityInfo);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(Object.values(validationErrors)[0]);
            setShowErrors(true);
            return;
        }

        dispatch(createActivity(activityInfo));
        setActivityInfo({
            name: "",
            difficulty: 1,
            duration: "",
            season: "",
            countries: [],
        });
        alert(`Activity ${activityInfo.name} was created successfully! Going to Home`);
        navigate("/home");
    }

    return (
        <div className={style.overlay}>
            <div className={style.formContainer}>
            <div>
                <NavLink to="/home">
                <button className={style.backtohomeButton}>Back to Home</button>
                </NavLink>
            </div>
            <header>
                <div>
                    <p className={style.formTitle}>Create Activity</p>
                </div>
            </header>
            <section>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className={style.formContent}>
                        {showErrors && <p className={style.errorAlerts}>{errors}</p>}
                        <div className={style.labelAndInput}>
                        <input className={style.nameInput} placeholder='Name of Activity' type='text' id="name" name="name" value={activityInfo.name} onChange={handleChange}/>
                        </div>
                        <div></div>
                        <label htmlFor='nombre' className={style.formTitles}>Choose Activity duration</label>
                        <div className={style.durationDiv}>
                        <input className={style.durationInput} placeholder="Activity Duration" name="duration" value={activityInfo.duration} type="number" min="1" max="24" onChange={handleChange}/>
                        <label htmlFor="name" className={style.hoursText}>Hour/s</label>
                        </div>

                        <label className={style.formTitles}>Choose Activity difficulty level ( 1-5 )</label>
                        <div className={style.circleOptions}>
                            <label>1</label>
                            <input className={style.circleInputs} type="radio" id="1" value='1' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>2</label>
                            <input className={style.circleInputs} type="radio" id="2" value='2' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>3</label>
                            <input className={style.circleInputs} type="radio" id="3" value='3' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>4</label>
                            <input className={style.circleInputs} type="radio" id="4" value='4' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>5</label>
                            <input className={style.circleInputs} type="radio" id="5" value='5' name='difficulty' onChange={(event) => handleChoose(event)} />
                        </div>
                        <label className={style.formTitles}>Choose Activity season</label>
                        <div>

                            <label className={style.seasonOptions}>🌞 Summer</label><input type="radio" id="Verano" value="Verano" name="season" onChange={(event) => handleChoose(event)} />
                            <label className={style.seasonOptions}>🍁 Autumn</label><input type="radio" id="Otoño" value="Otoño" name="season" onChange={(event) => handleChoose(event)} />
                            <label className={style.seasonOptions}>❄️ Winter</label><input type="radio" id="Invierno" value="Invierno" name="season" onChange={(event) => handleChoose(event)} />
                            <label className={style.seasonOptions}>🌷 Spring</label><input type="radio" id="Primavera" value="Primavera" name="season" onChange={(event) => handleChoose(event)} />
                        </div>
                        <label className={style.formTitles}>Choose Countries to associate</label>
                        <select className={style.countriesSelector} placeholder="Choose countries to associate" name="countries" onChange={(event) => handleSelect(event)}>
                            <option className={style.countriesOptions}>Choose the countries</option>
                            {allCountries?.map(element => {
                                return (
                                    <option className={style.countriesOptions} value={element.id} key={element.id}>{element.name}</option>
                                )
                            })}
                        </select>
                        <button className={style.submitFormButton}type="submit">CREATE</button>
                        <div className={style.countriesGrid}>
                        {activityInfo.countries?.map(country => {
                            return (
                                <div key={Math.random()}>
                                    <div className={style.removersContainer}>
                                        <p className={style.countryName}>- {allCountries.find(activityCountry => activityCountry.id === country).name}</p>
                                        <button className={style.countryRemoveButton} value={country} type="button" onClick={(event) => handleRemove(event)} >Remove</button>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                        </div>
                    </form>
                </div>
            </section>
            </div>
        </div>
    )
}

export default Form;