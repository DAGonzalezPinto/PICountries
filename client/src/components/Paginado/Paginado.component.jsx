import style from "./Paginado.module.css";

const Paginado = ({ page, setPage, currentPage, setCurrentPage, maxPages }) => {
    const nextPage = () => {
      if (currentPage + 1 <= maxPages) {
        setPage(page + 1);
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage - 1 >= 1) {
        setPage(page - 1);
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handlePagination = (event) => {
      const selectedPage = Number(event.target.value);
      if (selectedPage <= maxPages && selectedPage >= 1) {
        setPage(selectedPage);
        setCurrentPage(selectedPage);
      } else {
        alert(`Oops! Solo tenemos un máximo de ${maxPages} paginas.`);
      }
    };
  
    return (
      <div>
        {currentPage === 1 ? (
          <span className={style.hideButton}></span>
        ) : (
          <button className={style.anterior} onClick={prevPage}>
            Patra
          </button>
        )}
        <input
          max={maxPages}
          name="page"
          autoComplete="off"
          value={currentPage}
          onChange={(event) => handlePagination(event)}
        />
        <button>de {maxPages}</button>
        {currentPage === maxPages ? (
          <div className={style.hideButton}></div>
        ) : (
          <button className={style.siguiente} onClick={nextPage}>
            Palante
          </button>
        )}
      </div>
    );
  };
  
  export default Paginado;