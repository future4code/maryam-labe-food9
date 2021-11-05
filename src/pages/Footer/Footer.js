import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";
import { IconButton, Divider } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

function Footer(props) {
  let history = useHistory();

  const ChangePage = (pageToLink) => {
    history.push(`/${pageToLink}`);
  };

  const GetFooter = () => {
    return (
      <div className="Footer">
        {props.currentPage === "home" ? (
          <IconButton onClick={() => ChangePage("home")} color="secondary">
            <HomeOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => ChangePage("home")}>
            <HomeOutlinedIcon />
          </IconButton>
        )}

        {props.currentPage === "cart" ? (
          <IconButton onClick={() => ChangePage("carrinho")} color="secondary">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => ChangePage("carrinho")}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        )}

        {props.currentPage === "profile" ? (
          <IconButton onClick={() => ChangePage("profile")} color="secondary">
            <PersonOutlineOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => ChangePage("profile")}>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        )}
      </div>
    );
  };

  return (
    <div className="AppBar">
      <Divider />
      {GetFooter()}
    </div>
  );
}

export default Footer;