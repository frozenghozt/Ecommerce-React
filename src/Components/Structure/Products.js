import React, { useEffect } from "react";
import styles from "./Products.module.scss";
import axios from "axios";
import HpProduct from "../SmallComponents/HpProduct";
import { Server } from "miragejs";
import productObj from "../../dbObjects/ProductsObj";

let server = new Server();
server.get("/api/inventory", productObj);

const Product = () => {
  const [data, setdata] = React.useState({ inventory: [] });

  useEffect(() => {
    axios
      .get("/api/inventory")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.products}>
      {data.inventory.map(
        ({ id, uid, name, price, prevprice, img, hot, colors }) => (
          <HpProduct
            key={id}
            uid={uid}
            name={name}
            price={price}
            prevprice={prevprice}
            img={img}
            hot={hot}
            colors={colors}
          />
        )
      )}
    </div>
  );
};

export default Product;
