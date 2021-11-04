import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import CreateLoginPage from "../pages/CreateLoginPage/CreateLoginPage";
import HomePage from "../pages/HomePage/HomePage";
import HomeScreenPage from "../pages/HomeScreenPage/HomeScreenPage";
import LoginPage from "../pages/LoginPage/LoginPage";

import ProfilePage from "../pages/ProfilePage/ProfilePage";

import RestaurantDetailsPage from "../pages/RestaurantDetailsPage/RestaurantDetailsPage";
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage";
import CartPage from "../pages/CartPage/CartPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomeScreenPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/cadastro">
          <CreateLoginPage />
        </Route>

        <Route exact path="/endereço">
          <AddAddressPage />
        </Route>

        <Route exact path="/home">
          <HomePage />
        </Route>

        <Route exact path="/detalhes/:id">
          <RestaurantDetailsPage />
        </Route>

        <Route exact path="/perfil">
          <ProfilePage />
        </Route>

        <Route exact path="/carrinho">
          <CartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
