import React, { useState } from "react";
import { useContext } from "react";
import { productContext } from "../../../App";
import Pagination from "../../Shared/Pagination/Pagination";
import ShowCase from "../ShowCase/ShowCase";
import "./Product.css";

const Product = () => {
  const product = useContext(productContext);
  const [page, setPage] = useState(1);
  return (
    <div className="Product-container">
      <div className="Product">
        {product?.slice((page - 1) * 10, page * 10).map((data) => (
          <ShowCase data={data}></ShowCase>
        ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        length={product.length}
      ></Pagination>
    </div>
  );
};

export default Product;
