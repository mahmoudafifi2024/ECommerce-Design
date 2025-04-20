import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  pageCount = 0, 
  onPageChange 
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={onPageChange}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination; 