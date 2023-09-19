import React from "react";
import { PAGE_SIZE, useCommentsList, usePagination } from "../hooks";
import styled from "styled-components";

const CommentsWrapper = styled.section`
  padding: 130px 0;
  width: 560px;
  margin: 0 auto;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & span {
    font-weight: 600;
  }
`;

const SortItem = styled.span`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Comment = styled.div`
  padding-top: 70px;

  & > span {
    font-size: 14px;
  }

  & h5 {
    margin: 8px 0 0;

    span + span {
      margin-left: 12px;
    }
  }

  & p {
    margin: 8px 0 0;
  }
`;

const SkeletonLoader = styled.div`
  background: linear-gradient(
    transparent,
    ${({ theme }) => theme.colors.textSecondary}
  );
  background-size: 400% 400%;
  animation: gradient 1s ease infinite;
  height: 100vh;
  border-radius: 8px;
  width: 100%;
  height: 656px;

  @keyframes gradient {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
`;

const Pagination = styled.div`
  margin-top: 85px;
  display: flex;
  align-items: baseline;
`;

const PageList = styled.ul`
  padding: unset;
  list-style-type: none;
  display: flex;
`;

const Page = styled.li`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.background};
  padding: 15px;
  cursor: pointer;

  &:hover {
    color: ${({ active, theme }) =>
      active ? theme.colors.text : theme.colors.primary};
  }
`;

const CommentsList = () => {
  const { page, setPage, order, setOrder } = usePagination();
  const { comments, loading, error, count } = useCommentsList({ page, order });

  const totalPages = Math.ceil(count / PAGE_SIZE);

  const pages = [...new Array(totalPages)].map((_, i) => i + 1);

  return (
    <CommentsWrapper id="comments">
      <Heading>
        <h4>Comments</h4>
        <span>
          <SortItem active={order === "asc"} onClick={() => setOrder("asc")}>
            oldest
          </SortItem>{" "}
          |{" "}
          <SortItem active={order === "desc"} onClick={() => setOrder("desc")}>
            newest
          </SortItem>
        </span>
      </Heading>
      {loading && <SkeletonLoader />}
      {error && <p>Something went wrong!</p>}
      {!loading &&
        !error &&
        comments.map(({ id, createdAt, content, email, name }) => (
          <Comment key={id}>
            <span>{new Date(createdAt).toDateString()}</span>
            <h5>
              <span>{name}</span>
              <span>{email}</span>
            </h5>
            <p>{content}</p>
          </Comment>
        ))}
      <Pagination>
        <PageList>
          {pages
            .slice(Math.max(page - 3, 0), Math.min(page + 2, totalPages))
            .map((pageNo) => (
              <Page
                key={pageNo}
                active={page === pageNo}
                onClick={() => setPage(pageNo)}
              >
                {pageNo}
              </Page>
            ))}
        </PageList>
        <span>/ {totalPages}</span>
      </Pagination>
    </CommentsWrapper>
  );
};

export default CommentsList;
