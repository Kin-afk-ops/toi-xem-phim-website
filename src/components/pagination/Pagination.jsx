"use client";

import "./pagination.scss";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

const Pagination = ({
  totalPage,
  path,
  currentPage,
  category,
  country,
  search,
}) => {
  const router = useRouter();
  let type;
  let query;
  if (category) {
    type = "category";
    query = category.split(" ").join("+");
  } else if (country) {
    type = "country";
    query = country.split(" ").join("+");
  } else if (search) {
    type = "q";
    query = search.split(" ").join("+");
  }

  const handlePageClick = (data) => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });

    if (category || country || search) {
      router.push(
        `/danh-sach/${path}?${type}=${query}&page=${data.selected + 1}`
      );
    } else {
      router.push(`/danh-sach/${path}?page=${data.selected + 1}`);
    }
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
