import React from "react";

import { Link, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();
  console.log(params.productid);

  const image=<img src="https://thumbs.dreamstime.com/b/stack-books-isolated-white-background-34637153.jpg" alt="loading"/>
console.log(image);
  return (
    <div style={{ marginTop: "200px" }}>
      <h1>Hello</h1>
      
      <ul>
        <li>
          <Link to="/products/Image" > Clothes</Link>
        </li>
        <li>
          {" "}
          <Link to="/products/p2">Books</Link>
        </li>
        <li>
          {" "}
          <Link to="/products/p3">Shoes</Link>
        </li>
        <p>{params.productid}</p>
      </ul>
    </div>
  );
};

export default Products;
