import React from "react";
import styled from "styled-components";

// Images
import CategorieOne from "../../assets/images/categorie1.jpg";
import CategorieOne768 from "../../assets/images/categorie1-768.jpg";
import CategorieOne1200 from "../../assets/images/categorie1-1200.jpg";
import CategorieTwo from "../../assets/images/categorie2.jpg";
import CategorieTwo768 from "../../assets/images/categorie2-768.jpg";
import CategorieTwo1200 from "../../assets/images/categorie2-1200.jpg";
import CategorieThree from "../../assets/images/categorie3.jpg";
import CategorieThree768 from "../../assets/images/categorie3-768.jpg";
import CategorieThree1200 from "../../assets/images/categorie3-1200.jpg";
import CategorieFour from "../../assets/images/categorie4.jpg";
import CategorieFour768 from "../../assets/images/categorie4-768.jpg";
import CategorieFour1200 from "../../assets/images/categorie4-1200.jpg";
import CategorieFive from "../../assets/images/categorie5-1200.jpg";
import CategorieSix from "../../assets/images/categorie6-1200.jpg";

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
  grid-column: col1-start;
  grid-row: row1-start;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    @media (min-width: 620px) {
      object-position: center;
    }
  }
  @media (min-width: 768px) {
    grid-column: col1-start;
    grid-row: row1-start / row2-end;
  }
`;

const Sunglasses = styled.picture`
  grid-column: col1-start;
  grid-row: row4-start;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    @media (min-width: 620px) {
      object-position: center;
    }
  }
  @media (min-width: 768px) {
    grid-column: col2-start;
    grid-row: row1-start;
  }
  @media (min-width: 1200px) {
    grid-column: col2-start;
    grid-row: row1-start;
  }
`;

const Men = styled.picture`
  grid-column: col1-start;
  grid-row: row2-start;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    @media (min-width: 620px) {
      object-position: center;
    }
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
  grid-column: col1-start;
  grid-row: row3-start;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    @media (min-width: 620px) {
      object-position: center;
    }
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
  display: none;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1200px) {
    display: block;
    grid-column: col4-start;
    grid-row: row2-start;
  }
`;

const Hats = styled.picture`
  display: none;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1200px) {
    display: block;
    grid-column: col3-start / col5-start;
    grid-row: row1-start;
  }
`;

const Categories = () => {
  return (
    <Wrapper>
      <Grid>
        <Women>
          <source media="(min-width: 768px)" srcSet={CategorieOne768} />
          <source media="(min-width: 1200px)" srcSet={CategorieOne1200} />
          <img src={CategorieOne} alt="yo" />
        </Women>
        <Sunglasses>
          <source media="(min-width: 768px)" srcSet={CategorieFour768} />
          <source media="(min-width: 1200px)" srcSet={CategorieFour1200} />
          <img src={CategorieFour} alt="yo" />
        </Sunglasses>
        <Men>
          <source media="(min-width: 768px)" srcSet={CategorieTwo768} />
          <source media="(min-width: 1200px)" srcSet={CategorieTwo1200} />
          <img src={CategorieTwo} alt="yo" />
        </Men>
        <Sneakers>
          <source media="(min-width: 768px)" srcSet={CategorieThree768} />
          <source media="(min-width: 1200px)" srcSet={CategorieThree1200} />
          <img src={CategorieThree} alt="yo" />
        </Sneakers>
        <Leather>
          <img src={CategorieFive} alt="yo" />
        </Leather>
        <Hats>
          <img src={CategorieSix} alt="yo" />
        </Hats>
      </Grid>
    </Wrapper>
  );
};

export default Categories;
