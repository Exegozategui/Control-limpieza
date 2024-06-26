// Paginacion.js
import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginacion = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <Pagination className="justify-content-center mt-4">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Paginacion;
