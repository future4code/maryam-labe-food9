import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";

const RestaurantDetailsPage = () => {
  const params = useParams();
  const [restaurant, isLoading, getData] = useRequestData(
    [],
    `${BASE_URL}/restaurants/1`
  );
  console.log(params);
  console.log("Restaurant", restaurant.restaurant);

  return (
    <div>
      <h1>RestaurantDetailsPage</h1>
      {!isLoading &&
        restaurant &&
        restaurant.restaurant.products.map((product) => {
          return <div>{product.name}</div>;
        })}
    </div>
  );
};

export default RestaurantDetailsPage;
