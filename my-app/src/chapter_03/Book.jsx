import React from "react";

const Book = (props) => {
  return (
    <div>
      <h1>{`이책의 이픔은 ${props.name}입니다.`}</h1>
      <h2>{`이책은 총 ${props.numOfPage}로 이루어져 있습니다.`}</h2>
    </div>
  );
};

export default Book;
