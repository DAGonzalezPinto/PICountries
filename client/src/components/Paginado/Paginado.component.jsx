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
      <div className={style.paginadoContainer}>
        <div className={style.pagButtonsContainer}>
        {currentPage === 1 ? (
          <span className={style.hideButton}></span>
        ) : (
          <button className={style.pagAButton} onClick={prevPage}>
             ◁ 
          </button>
        )}
        <input
          max={maxPages}
          className={style.pagInput}
          name="page"
          autoComplete="off"
          value={currentPage}
          onChange={(event) => handlePagination(event)}
        />
        <button className={style.currentPag}>of {maxPages}</button>
        {currentPage === maxPages ? (
          <div className={style.hideButton}></div>
        ) : (
          <button className={style.pagDButton} onClick={nextPage}>
             ▷
          </button>
        )}
        </div>
      </div>
    );
  };
  
  export default Paginado;