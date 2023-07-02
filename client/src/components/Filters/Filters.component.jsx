import { useDispatch, useSelector } from "react-redux";
import { filterByContinents, sortByPopulation, sortByAlphabet, filterByActivities } from "../../redux/actions/actions";


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
        <div>
           <select className="select" onChange={(e) => handleSortByAlphabet(e.target.value)}>
            <option>Sort by Alphabet</option>
            <option value="ascendant">A - Z (⇑)</option>
            <option value="descendant">Z - A (⇓)</option>
          </select>
          <select className="select" onChange={(e) => handleSortByPopulation(e.target.value)}>
            <option>Sort by Population</option>
            <option value="ascendant">Smallest to Largest (⇑)</option>
            <option value="descendant">Largest to Smallest (⇓)</option>
      </select>
          <select className="select" onChange={(event) => handleFilterByContinents(event.target.value)}>
            <option value="all">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>
          <select onChange={(event)=>handleFilterByActivities(event.target.value)}> 
                    <option >Filter By Activity</option>
                    {nonRepeatedActivities?.map(activity => {
                        return(
                            <option value={activity} key={Math.random()}>{activity}</option> 
                            )
                        })
                    }
                </select>
    
        </div>
    )
};



export default Filters;