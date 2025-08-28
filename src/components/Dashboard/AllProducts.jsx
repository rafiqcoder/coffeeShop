import React from "react";

const AllProducts = () => {
  return (
    <div className="bg-black">
      <h1>All Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{/* Map through your products and display them here */}</tbody>
      </table>
    </div>
  );
};

export default AllProducts;
