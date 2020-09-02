import React from "react";
import styled from "styled-components";

// Images
import CatWomen from "../../assets/images/catwomen.jpg";
import CatWomen767 from "../../assets/images/catwomenmin1200.jpg";

const Wrapper = styled.div`
  padding: 60px 0 30px 0;
  display: flex;
  justify-content: center;
  @media (min-width: 1200px) {
    padding: 120px 0 60px 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  max-width: 1450px;
  grid-template-columns: [col1-start] 1fr;
  grid-template-rows: [row1-start] 150px [row2-start] 150px [row3-start] 150px [row4-start] 150px [row4-end];
  @media (min-width: 768px) {
    grid-template-columns: [col1-start] 3.7fr [col2-start] 3.7fr [col3-start] 3.7fr [col3-end];
    grid-template-rows: [row1-start] 200px [row2-start] 200px [row2-end];
  }
  @media (min-width: 1200px) {
    grid-template-columns: [col1-start] 3.7fr [col2-start] 3fr [col3-start] 1fr [col4-start] 3fr [col5-start] 3.7fr [col5-end];
    grid-template-rows: [row1-start] 250px [row2-start] 250px [row2-end];
  }
`;

const Women = styled.picture`
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 767.98px) {
    grid-column: col1-start;
    grid-row: row1-start;
  }
  @media (min-width: 768px) {
    grid-column: col1-start;
    grid-row: row1-start / row2-end;
  }
`;

const Sunglasses = styled.picture`
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -70px;
  @media (max-width: 767.98) {
    grid-column: col1-start;
    grid-row: row4-start;
  }
  @media (min-width: 1200px) {
    grid-column: col2-start;
    grid-row: row1-start;
  }
`;

const Men = styled.picture`
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 767.98px) {
    grid-column: col1-start;
    grid-row: row2-start;
  }
  @media (min-width: 768px) {
    grid-column: col3-start;
    grid-row: row1-start / row2-end;
  }
  @media (min-width: 1200px) {
    grid-column: col5-start;
    grid-row: row1-start / row2-end;
  }
`;

const Sneakers = styled.picture`
  background: #999;
  background-position: center;
  background-size: cover;
  @media (max-width: 767.98px) {
    grid-column: col1-start;
    grid-row: row3-start;
  }
  @media (min-width: 768px) {
    grid-column: col2-start;
    grid-row: row2-start;
  }
  @media (min-width: 1200px) {
    grid-column: col2-start / col4-start;
    grid-row: row2-start;
  }
`;

const Leather = styled.picture`
  grid-column: col3-start / col5-start;
  grid-row: row1-start;
  @media (max-width: 1200px) {
    display: none;
    background-size: cover;
    background-repeat: no-reapeat;
  }
`;

const Hats = styled.picture`
  grid-column: col4-start / col5-start;
  grid-row: row2-start;
  background: #999;
  @media (max-width: 1200px) {
    display: none;
    background-size: cover;
    background-repeat: no-reapeat;
  }
`;

const Categories = () => {
  return (
    <Wrapper>
      <Grid>
        <Women>
          <source media="(max-width: 1199.98px)" srcSet={CatWomen767} />
          <source media="(min-width: 1200px)" srcSet={CatWomen} />
          <img src={CatWomen} alt="yo" />
        </Women>
        <Sunglasses
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1388888/pexels-photo-1388888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
          }}
        />
        <Leather
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
          }}
        />
        <Men
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
          }}
        />
        <Sneakers
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
          }}
        />
        <Hats></Hats>
      </Grid>
    </Wrapper>
  );
};

export default Categories;
