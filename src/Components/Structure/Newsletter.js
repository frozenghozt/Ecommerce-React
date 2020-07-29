import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <Container fluid maxWidth="lg">
        <div className={styles.wrapper}>
          <div className={styles.leftcontainer}>
            <span>Newsletter</span>
            <p>
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
          </div>
          <div className={styles.rightcontainer}>
            <form>
              <input type="text" placeholder="Enter your email" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
