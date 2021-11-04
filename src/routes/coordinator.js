export const gotToHome = (history) => {
  history.push("/home");
};

export const gotToRestaurantDetails = (history, id) => {
  history.push(`/detalhes/${id}`);
};

