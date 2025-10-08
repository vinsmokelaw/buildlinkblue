import React from "react";

const PaginationDots = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px" }}>
      {[...Array(totalPages)].map((_, index) => (
        <span
          key={index}
          onClick={() => onPageChange(index)}
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            cursor: "pointer",
            backgroundColor: index === currentPage ? "orange" : "#ccc",
            transition: "background-color 0.3s",
          }}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
