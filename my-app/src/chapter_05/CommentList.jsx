import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "seunam",
    comment: "hi my name is seunam!",
  },
  {
    name: "RunningLearner",
    comment: "hi my name is RunningLearner!",
  },
  {
    name: "dundun",
    comment: "hi my name is dundun!",
  },
];

const CommentList = () => {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
};

export default CommentList;
