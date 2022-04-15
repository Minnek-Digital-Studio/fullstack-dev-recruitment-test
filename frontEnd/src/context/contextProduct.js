import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [reload, setReload] = useState(false);

  const api = "http://localhost:4000/api/product";

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  async function createProduct(post) {
    try {
      const form = new FormData();

      for (let key in post) {
        form.append(key, post[key]);
      }

      const data = await axios.post(api, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProduct([...product, data.data]);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductContext.Provider
      value={{ product, createProduct, setReload, reload }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider };
export default ProductContext;
