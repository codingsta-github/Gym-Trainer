import React from "react";
import { useContext } from "react";
import { productContext } from "../../../App";
import useProduct from "../../../Hooks/useProduct";
import Loading from "../../Shared/Loading/Loading";
import ShowCase from "../ShowCase/ShowCase";
import "./Product.css";

const Product = () => {
  // const [product, setProduct] = useProduct();
  const product=useContext(productContext)
  console.log("product" , product)
  return (
    <div className="Product">
      {!product ? (
        <Loading></Loading>
      ) : (
        <>
          {product?.map((data) => (
            <ShowCase data={data}></ShowCase>
          ))}
        </>
      )}
    </div>
  );
};

export default Product;
