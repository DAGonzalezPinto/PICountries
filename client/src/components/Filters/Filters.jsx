import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortByPopulation, sortByAlphabet, filterByContinents } from '../../redux/actions/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedPopulationOrder, setSelectedPopulationOrder] = useState('');
  const [selectedAlphabetOrder, setSelectedAlphabetOrder] = useState('');

  const handleFilterByContinents = (continent) => {
    setSelectedContinent(continent);
    dispatch(filterByContinents(continent));
  };

  const handleSortByPopulation = (order) => {
    setSelectedPopulationOrder(order);
    dispatch(sortByPopulation(order));
  };

  const handleSortByAlphabet = (order) => {
    setSelectedAlphabetOrder(order);
    dispatch(sortByAlphabet(order));
  };

  return (
    <div>
      <select className="select" value={selectedAlphabetOrder} onChange={(e) => handleSortByAlphabet(e.target.value)}>
        <option value="">Ordenar alfabéticamente</option>
        <option value="ascendant">Ascendente</option>
        <option value="descendant">Descendente</option>
      </select>
      <select className="select" value={selectedPopulationOrder} onChange={(e) => handleSortByPopulation(e.target.value)}>
        <option value="">Ordenar por población</option>
        <option value="ascendant">Ascendente(⇑)</option>
        <option value="descendant">Descendente(⇓)</option>
      </select>
      <select className="select" value={selectedContinent} onChange={(event) => handleFilterByContinents(event.target.value)}>
        <option value="">Filtrar por continente</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
    </div>
  );
};

export default Filters;