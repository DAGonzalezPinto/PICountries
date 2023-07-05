import { useDispatch, useSelector } from "react-redux";
import { filterByContinents, sortByPopulation, sortByAlphabet, filterByActivities } from "../../redux/actions/actions";
import style from "./Filters.module.css";

const Filters = ({ handleFilter }) => {
    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.allActivities);

    let filteredActivities = allActivities.filter(country => {
        if (country.activities && country.activities[0] !== undefined) {
          return country.activities;
        }
      });
      
      let aviableActivities = filteredActivities.map(country => country.activities[0]['name']);
      let nonRepeatedActivities = aviableActivities.filter((activity,index)=>{
        return aviableActivities.indexOf(activity) === index;
      })

    const handleFilterByContinents = (continent) => {
        handleFilter()
        dispatch(filterByContinents(continent));
    };

    const handleFilterByActivities = (activity) => {
        handleFilter()
        dispatch(filterByActivities(activity));
    };

    const handleSortByPopulation = (order) => {
        dispatch(sortByPopulation(order));
    };

    const handleSortByAlphabet = (order) => {
        dispatch(sortByAlphabet(order));
    };
    return(
        <div className={style.filtersContainer}>
          <div className={style.buttonsContainer}>
           <select className={style.selectButtons} onChange={(e) => handleSortByAlphabet(e.target.value)}>
            <option className={style.selectOptions}>Sort by Alphabet</option>
            <option className={style.selectOptions} value="descendant">⇑ Z - A ⇑</option>
            <option className={style.selectOptions} value="ascendant">⇓ A - Z ⇓</option>
          </select>
          <select className={style.selectButtons} onChange={(e) => handleSortByPopulation(e.target.value)}>
            <option className={style.selectOptions}>Sort by Population</option>
            <option className={style.selectOptions} value="ascendant">⇑ Smallest to Largest ⇑</option>
            <option className={style.selectOptions} value="descendant">⇓ Largest to Smallest ⇓</option>
      </select>
          <select className={style.selectButtons} onChange={(event) => handleFilterByContinents(event.target.value)}>
            <option className={style.selectOptions} value="all">All Continents</option>
            <option className={style.selectOptions} value="Africa">Africa</option>
            <option className={style.selectOptions} value="Asia">Asia</option>
            <option className={style.selectOptions} value="Europe">Europe</option>
            <option className={style.selectOptions} value="Oceania">Oceania</option>
            <option className={style.selectOptions} value="Antarctica">Antarctica</option>
            <option className={style.selectOptions} value="North America">North America</option>
            <option className={style.selectOptions} value="South America">South America</option>
          </select>
          <select className={style.selectButtons} onChange={(event)=>handleFilterByActivities(event.target.value)}> 
                    <option >Filter By Activity</option>
                    {nonRepeatedActivities?.map(activity => {
                        return(
                            <option value={activity} key={Math.random()}>{activity}</option> 
                            )
                        })
                    }
                </select>
                </div>
        </div>
    )
};



export default Filters;