const Pagination = ({ total, limit, setPage, currPage }) => {
  const totalPage = total / limit + (total % limit == 0 ? 0 : 1);
  const active = currPage / 10;
  return (
    <div className="page-container">
      {totalPage
        ? [...Array(totalPage).keys()].map((_, index) => (
            <button
              key={index}
              className={`page ${active === index  ? "active" : ""}`}
              onClick={() => setPage(index)}
            >
              {index + 1}
            </button>
          ))
        : null}
    </div>
  );
};
export default Pagination;
