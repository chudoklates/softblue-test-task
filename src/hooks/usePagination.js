import { useState } from "react";

/**
 * Provides state management for simple pagination/sorting
 * @returns The pagination object
 */
const usePagination = () => {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("desc");

  return {
    page,
    setPage,
    order,
    setOrder,
  };
};

export default usePagination;
