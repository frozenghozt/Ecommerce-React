import React from "react";
import styles from "./Banner.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Container fixed>
        <Grid item md={6} sm={12}>
          <span>
            SPRING SALE <span style={{ color: "red" }}>30%</span>
          </span>
          <p>
            Shop the latest women's clothes at Kossy and keep your style game
            strong with the freshest threads landing daily. Shopping is a right,
            not a luxury.
          </p>
          <button>SHOP NOW</button>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
