export const promoPrice = (price, discount) => {

  if ((price < 0 || discount < 0) 
  || (typeof price != Number || typeof discount != Number) 
  || (price == undefined || discount == undefined)) {
    return null;
  }

  const discountPercent = discount/100;
  return price - (price * discountPercent);
};
  
  