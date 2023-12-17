"use client";

import "./pagination.scss";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

const Pagination = ({ totalPage, path, currentPage, setMovies }) => {
  const router = useRouter();

  const handlePageClick = async (data) => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
    await setMovies([]);
    router.push(`/danh-sach/${path}?page=${data.selected + 1}`);
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
          pageCount={totalPage}
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
