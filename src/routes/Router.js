import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CartPage from "../pages/CartPage"
import CreateLoginPage from "../pages/CreateLoginPage"
import HomePage from "../pages/HomePage"
import HomeScreenPage from "../pages/HomeScreenPage"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage"
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage";

const Router = () => {
    return(
      
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomeScreenPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/cadastro">
                    <CreateLoginPage/>
                </Route>

                <Route exact path="/endereço">
                    <AddAddressPage/>
                </Route>

                <Route exact path="/home">
                    <HomePage/>
                </Route>
              
                <Route exact path="/detalhes">
                    <RestaurantDetailsPage/>
                </Route>

                <Route exact path="/perfil">
                    <ProfilePage/>
                </Route>
                
                <Route exact path="/carrinho">
                    <CartPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router