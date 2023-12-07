import "./pagination.scss";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

const Pagination = ({ totalMovie, moviesPerPage, type, path, currentPage }) => {
  let pages = [];

  for (var i = 1; i <= Math.ceil(totalMovie / moviesPerPage); i++) {
    pages.push(i);
  }
  const router = useRouter();

  const handlePageClick = (data) => {
    console.log(data);
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
    router.replace(`/danh-sach/${type}/${path}?page=${data.selected + 1}`);
  };

  return (
    <div>
      <div className="pagination">
        <ReactPaginate
          onPageChange={handlePageClick}
          className="paginationPage"
          previousLabel="<"
          nextLabel=">"
          breakLabel={"..."}
          pageCount={pages.length}
          marginPagesDisplayed={2}
          forcePage={parseInt(currentPage) - 1}
          previousClassName="prev"
          nextClassName="next"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Pagination;
