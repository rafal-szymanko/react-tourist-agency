export const promoPrice = (price, discount) => {

  if ((price < 0 || discount < 0)) {
    return null;
  }

  const discountPercent = discount/100;
  return price - (price * discountPercent);
};
  
  