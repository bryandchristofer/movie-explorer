import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="pagination-info">Page {currentPage}</span>
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
