import React from "react";
import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "../StockCommentListItem/StockCommentListItem";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment, index) => {
            return (
              <StockCommentListItem
                key={index} // Use index as the key (not ideal but works in absence of unique id)
                comment={comment}
              />
            );
          })
        : ""}
    </>
  );
};

export default StockCommentList;
