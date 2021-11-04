import React, { useState } from "react";
import { Typography, TextField } from "@material-ui/core";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useHistory } from "react-router";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { ContainerMobile, Container, Header, Body } from "./styled";
import { gotToRestaurantDetails } from "../../routes/coordinator";

const HomeScreenPage = () => {
  const history = useHistory();

  const [restaurants, isLoading, getData] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );
  const [searchName, SetSearchName] = useState("");

  const controlInputName = (event) => {
    SetSearchName(event.target.value);
  };

  const filteredRestaurats =
    !isLoading &&
    restaurants &&
    restaurants.restaurants.filter((item) => {
      return item.name.toLowerCase().includes(searchName.toLowerCase());
    });
  const onClickCard = (id) => {
    gotToRestaurantDetails(history, id);
  };

//   console.log(restaurants.restaurants);
//   console.log("filtrados: ", filteredRestaurats);

  const restaurantCard =
    filteredRestaurats &&
    filteredRestaurats.map((restaurant, index) => {
      return (
        <RestaurantCard
          index={index}
          logoUrl={restaurant.logoUrl}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          onClick={() => onClickCard(restaurant.id)}
        />
      );
    });

  return (
    <Container>
      <ContainerMobile>
        <Header>
          <Typography>Ifuture</Typography>
        </Header>
        <Body>
          <TextField
            label="Restaurantes"
            size="small"
            variant={"outlined"}
            fullWidth
            onChange={controlInputName}
          />
          <>{restaurantCard}</>
        </Body>
      </ContainerMobile>
    </Container>
  );
};

export default HomeScreenPage;
