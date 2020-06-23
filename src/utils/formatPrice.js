export const formatPrice = price => {
  return typeof(price) != 'number'
    ? price
    : price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
};
