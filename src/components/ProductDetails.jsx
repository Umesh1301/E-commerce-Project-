import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
const params=useParams();
console.log(params.productid)

const productList=[];

const productAddHandler=()=>{
    if(productList.length === 0){
        productList.push;
    }
}

  return (
    <div style={{marginTop:'200px'}}>

        <h1>Product Details</h1>
      
        <p>{params.productid}</p>
        
      
    </div>
  );
};

export default ProductDetails;
