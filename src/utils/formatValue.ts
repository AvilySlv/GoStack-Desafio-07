const formatValue = (value: number): string => {
  const formattedValue = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
};

export default formatValue;
