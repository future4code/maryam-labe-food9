import React from "react";
import { Typography } from "@material-ui/core";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const HomeScreenPage = () => {
  const [restaurants, isLoading, getData] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );

  console.log(restaurants.restaurants);

  return (
    <div>
      <Typography color={"primary"}>Restaurants</Typography>
      <Typography>
        {!isLoading &&
          restaurants &&
          restaurants.restaurants.map((restaurant, index) => {
            return <div key={index}>{restaurant.name}</div>;
          })}
      </Typography>
    </div>
  );
};

export default HomeScreenPage;
