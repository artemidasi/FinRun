export const priceFormatter = (number: number) => {
  if (isNaN(number)) return '';
  const priceString = String(Number(number).toFixed(0));
  const integerPrice = priceString.split('.')[0];

  const formateIntegerPrice = integerPrice.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ' ',
  );

  return `${formateIntegerPrice} ₽`;
};
