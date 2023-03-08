import React from "react";
import { useParams } from "react-router-dom";
const SingleBook = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Single Book ID is : {id}</h1>
    </div>
  );
};

export default SingleBook;
