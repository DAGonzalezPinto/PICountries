import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, createActivity } from "../../redux/actions/actions";
import { validateForm } from "./FormValidation";
import { useNavigate } from "react-router-dom";

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
        <>
            <header>
                <div>
                    <p>Create Activity Form</p>
                </div>
            </header>
            <section>
                <div>
                    <form onSubmit={handleSubmit}>
                        {showErrors && <p>{errors}</p>}
                        <label htmlFor='nombre'>Nombre</label>
                        <input placeholder='Name of Activity' type='text' id="name" name="name" value={activityInfo.name} onChange={handleChange}/>

                        <label htmlFor='nombre'>Duration</label>
                        <input name="duration" value={activityInfo.duration} type="number" min="1" max="24" onChange={handleChange}/>

                        <label>Difficulty</label>
                        <div>
                            <label>1</label>
                            <input type="radio" id="1" value='1' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>2</label>
                            <input type="radio" id="2" value='2' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>3</label>
                            <input type="radio" id="3" value='3' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>4</label>
                            <input type="radio" id="4" value='4' name='difficulty' onChange={(event) => handleChoose(event)} />
                            <label>5</label>
                            <input type="radio" id="5" value='5' name='difficulty' onChange={(event) => handleChoose(event)} />
                        </div>
                        <label>Temporada</label>
                        <div>

                            <label>Summer </label><input type="radio" id="Verano" value="Verano" name="season" onChange={(event) => handleChoose(event)} />
                            <label>Autumn</label><input type="radio" id="Otoño" value="Otoño" name="season" onChange={(event) => handleChoose(event)} />
                            <label>Winter</label><input type="radio" id="Invierno" value="Invierno" name="season" onChange={(event) => handleChoose(event)} />
                            <label>Spring</label><input type="radio" id="Primavera" value="Primavera" name="season" onChange={(event) => handleChoose(event)} />
                        </div>
                        <label>Pais</label>
                        <select placeholder="Choose countries to associate" name="countries" onChange={(event) => handleSelect(event)}>
                            <option>Choose the countries</option>
                            {allCountries?.map(element => {
                                return (
                                    <option value={element.id} key={element.id}>{element.name}</option>
                                )
                            })}
                        </select>
                        <button type="submit">CREAR</button>
                        {activityInfo.countries?.map(country => {
                            return (
                                <div key={Math.random()}>
                                    <div>
                                        <button value={country} type="button" onClick={(event) => handleRemove(event)} >Remove country</button>
                                        <p>{allCountries.find(activityCountry => activityCountry.id === country).name}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </form>
                </div>
            </section>
        </>
    )
}

export default Form;