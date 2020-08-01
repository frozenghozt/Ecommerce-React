import React from "react";
import styles from "./Products.module.scss";
import axios from "axios";
import HpProduct from "../SmallComponents/HpProduct";
import { Server } from "miragejs";

let server = new Server();
server.get("/api/inventory", {
  inventory: [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: "$ 170",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b86b4b22-c511-44cf-bcbf-488a712c4413/air-max-270-react-se-womens-shoe-6bhhrf.jpg",
    },
    {
      id: 2,
      name: "Nike Joyride Dual",
      price: "$ 130",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/16b7e9ee-7253-4ad0-9515-3d1265867319/joyride-dual-run-mens-running-shoe-8BGXtk.jpg",
    },
    {
      id: 3,
      name: "Nike Air Max Verona",
      price: "$ 130",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-5150aab0-88d1-4b92-ac2a-34d9d7710163/air-max-verona-womens-shoe-JF64LJ.jpg",
    },
    {
      id: 4,
      name: "Nike Air Force 1",
      price: "$ 100",
      img:
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/te6y2d0eti6qsqyfvl6e/air-force-1-sage-low-womens-shoe-b0cz8K.jpg",
    },
    {
      id: 5,
      name: "Nike Air Max 90",
      price: "$ 120",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e549272f-57ae-43cc-afa2-89709f70523f/air-max-90-twist-womens-shoe-kSTTrQ.jpg",
    },
    {
      id: 6,
      name: "Nike Blazer Mid '77",
      price: "$ 100",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/kxmb3lab5dmy00qpoyul/blazer-mid-77-vintage-shoe-flCCX4.jpg",
    },
    {
      id: 7,
      name: "Nike Blazer Low",
      price: "$ 75",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c979fced-263a-4922-8649-06ec3b252d51/blazer-low-leather-mens-shoe-4w5Mgj.jpg",
    },
    {
      id: 8,
      name: "Nike Air 270",
      price: "$ 150",
      img:
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/pyyixbczj6u5kiwhpjik/air-max-270-womens-shoe-Pgb94t.jpg",
    },
    {
      id: 9,
      name: "Air Jordan 1 Low",
      price: "$ 90",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-81c51f64-45c7-4aef-b1c6-d9799761c71e/air-jordan-1-low-shoe-z3Tl2VeJ.jpg",
    },
    {
      id: 10,
      name: "Nike Killshot 2",
      price: "$ 90",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-3ad4c993-d4c1-4db8-908d-7b2828afd92b/killshot-2-leather-mens-shoe-zrq1wk.jpg",
    },
    {
      id: 11,
      name: "Nike Air VaporMax",
      price: "$ 200",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9a75f943-17cd-4967-9be7-790b9c490af6/air-vapormax-flyknit-3-womens-shoe-ZHCbvC.jpg",
    },
    {
      id: 12,
      name: "Nike React Infinity",
      price: "$ 160",
      img:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0aaf3ec6-4f6a-405d-89cb-4e54cbbdc384/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
    },
  ],
});

const Product = () => {
  const [data, setdata] = React.useState({ inventory: [] });
  React.useEffect(() => {
    axios
      .get("/api/inventory")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.products}>
      {data.inventory.map(({ id, name, price, img }) => (
        <HpProduct key={id} name={name} price={price} img={img} />
      ))}
    </div>
  );
};

export default Product;
