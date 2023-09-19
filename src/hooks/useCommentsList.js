import { useCallback, useEffect, useState } from "react";

export const PAGE_SIZE = 4;

/** @type {import('../types').Comment[]} */
const INITIAL_COMMENTS = [];

/**
 * Accepts pagination and sorting arguments and returns a list of comments fetched from API
 *
 * @param {{ page: number, order: string }} props
 * @returns An object with the following properties:
 *
 * `comments` - The fetched list of comments
 *
 * `error` - Whether an error has occured while fetching
 *
 * `loading` - Whether the comments are currently being loaded
 *
 * `count` - The total number of comments
 */
const useCommentsList = ({ page, order }) => {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = `${process.env.GATSBY_API_LINK}/comments`;

  /**
   * Retrieves the total number of comments, and sets the count.
   *
   * NOTE: This API call is redundant, the API should return total number of items in paginated request
   */
  const getTotalComments = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const totalComments = await response.json();
      setCount(totalComments.length);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      await getTotalComments();
    })();
  }, []);

  const paginatedURL = new URL(url);

  paginatedURL.searchParams.append("page", page);
  paginatedURL.searchParams.append("limit", PAGE_SIZE);
  paginatedURL.searchParams.append("sortBy", "createdAt");
  paginatedURL.searchParams.append("order", order);

  /**
   * Memoised version of API call to get list of comments, and save it in React state
   *
   * Controls loading and error states
   */
  const fetchComments = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(paginatedURL, {
        method: "GET",
      });
      const newComments = await response.json();
      setComments(newComments);
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
      setError(true);
    }
  }, [page, order]);

  /**
   * Fetch comments on render, and refetch automatically if parameters
   * have changed.
   */
  useEffect(() => {
    (async () => {
      await fetchComments();
    })();
  }, [fetchComments]);

  return {
    comments,
    error,
    loading,
    count,
  };
};

export default useCommentsList;
