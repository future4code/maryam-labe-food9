import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { Container, ContainerDiv, Img, Items } from "./styled";
import {Card, IconButton, Switch, Chip,  Box, Avatar, Typography} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import { Stack } from "@mui/material";
import { LocationOn } from "@material-ui/icons";
import grey from '@material-ui/core/colors/grey'
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
      <Container>
      <h3>Restaurante</h3>
     
      {!isLoading &&
        restaurant && restaurant.restaurant.deliveryTime}

      {!isLoading &&
        restaurant && restaurant.restaurant.deliveryTime}

      {!isLoading &&
        restaurant &&
        restaurant.restaurant.products.map((product) => {
          return <Items key={product.id}>
                  <h3> {product.category} </h3>
                      {product.name}
                      {product.description}
             <Img src={product.photoUrl}/>
                      {product.price}
                      {product.address}
                 </Items>;
        })}
      </Container>
      <Card>
  <Box sx={{ p: 2, display: 'flex' }}>
  
    <Avatar variant="rounded" src="avatar1.jpg" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700}>Michael Scott</Typography>
      <Typography variant="body2" color="text.secondary">
      <LocationOn sx={{color: grey[500]}} /> Scranton, PA
      </Typography>
    </Stack>
   
    <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>
  </Box>
  <Divider />
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
  >
    <Chip>Active account</Chip>
    <Switch />
  </Stack>
</Card>
    </div>
  );
};

export default RestaurantDetailsPage;
