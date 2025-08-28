import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  const auth = getAuth();

  // Fetch products from an dummy json API
  useEffect(() => {
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => {
        console.log("Fetched products:", products);
        setProducts(products);
        setProductsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProductsLoading(false);
      });

    /* { status: 'ok', method: 'GET' } */
  }, []);

  // useEffect(() => {
  //   // Could be GET or POST/PUT/PATCH/DELETE
  //   fetch("http://localhost:3000/")
  //     .then((res) => {
  //       console.log("Fetched data:", res);
  //       setProductsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setProductsLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("checking user from Context Api:", user);
        setUserData(user);
        // ...

        setLoading(false);
      } else {
        // User is signed out
        // ...
        setUserData(null);
        setLoading(false);
      }
    });
    return () => {
      unsubcribe(); // Clean up the subscription on unmount
    };
  }, [auth]);

  if (loading || productsLoading) {
    return <div className="loading">Loading...</div>;
  }

  const values = {
    userData,
    setUserData,
    loading,
    setLoading,
    products,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default ContextApi;
