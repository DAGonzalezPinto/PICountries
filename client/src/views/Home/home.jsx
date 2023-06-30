import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cards from "../../components/Cards/Cards.component";
import { getAllCountries } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/NavBar.component";


const Home = () => {
    const dispatch = useDispatch();
    const allSelectedCountries = useSelector((state) => state.countries);
    useEffect(() =>{
        dispatch(getAllCountries())
    }, [dispatch])

    return (
        <div>
        <NavBar/>
        <Cards allCountries = {allSelectedCountries}/>
        </div>
    )
};

export default Home;