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


// Answer 1:- he try to giving the path to move to that product.



// Answer 2:- It means that by this we move to the specific location/product in which we want,by passing the id in the path,

// Answer 3:-useParams hook allowa us to acces the URL parameter with our component,it retrieve the value of the parameter specified in the route and make it available for the further use.

// useParams return the object that contains the current route's filled in dynamic parameters



// Answer 1:- because they they are not bind in a single tag . so for this we use switch and for match the complete url we use exact prop

// Answer:-2 the problem with using switch without exact given the data which ever the path match the first word rather then the complete URL,

// so for not getting this type of error we use exact prop.

// Answer:- when we use route inside the return of any component raher than APP or MAIN file ,then this is called nested routes.



// 07f6516
