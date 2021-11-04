import React from "react";
import { Typography, Card, CardMedia } from "@material-ui/core";
import { CardContent, ContainerCard } from "./styled";

const RestaurantCard = (props) => {
  return (
    <div>
      <ContainerCard key={props.index} onClick={props.onClick}>
        <Card sx={{ maxWidth: 328 }}>
          <CardMedia
            component="img"
            height="120"
            image={props.logoUrl}
            alt={props.name}
          />

          <CardContent>
            <div>
              <Typography gutterBottom component="div" color={"primary"}>
                {props.name}
              </Typography>
              <Typography color="textSecondary">
                {props.deliveryTime} min
              </Typography>
            </div>
            <div>
              <Typography color="textSecondary">
                Frete: R${props.shipping},00
              </Typography>
            </div>
          </CardContent>
        </Card>
      </ContainerCard>
    </div>
  );
};

export default RestaurantCard;
