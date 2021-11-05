import React, { useState, useEffect, useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { ScreenContainer } from "./styled";
import { gotToHome } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";

const CartPage = () => {
  const { cart, setCart } = useContext(GlobalStateContext);
  const [priceToPay, setPriceToPay] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let newPrice = 0;
    cart.forEach((item) => {
      newPrice += item.price * item.amount;
    });
    setPriceToPay(newPrice);
  }, [cart]);

  const removeItem = (itemToRemove) => {
    const position = cart.findIndex((item) => {
      return item.id === itemToRemove.id;
    });

    let newCart = [...cart];

    if (newCart[position].amount === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].amount -= 1;
    }

    setCart(newCart);
  };

  const cartList =
    cart.length === 0
      ? "Carrinho vazio"
      : cart.map((item) => {
          return (
            <ProductItem
              key={item.id}
              name={item.name}
              price={Number(item.price)}
              image={item.photos[0]}
              amount={item.amount}
              removeItem={() => removeItem(item)}
            />
          );
        });

  return (
    <div>
      <h1>CartPage</h1>
      <ScreenContainer>
        {cartList}
        <h1>Total: R${priceToPay.toFixed(2)}</h1>
        <button onClick={() => gotToHome(history)}>Continuar Comprando</button>
      </ScreenContainer>
    </div>
  );
};

export default CartPage;
