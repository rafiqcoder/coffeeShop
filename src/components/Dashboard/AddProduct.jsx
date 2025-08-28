import React from "react";

const AddProduct = () => {
  return (
    <div className="bg-black">
      <h1>Add New Product</h1>
      <form>
        <div>
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" name="productName" required />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            id="productDescription"
            name="productDescription"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="productPrice">Product Price</label>
          <input type="number" id="productPrice" name="productPrice" required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
