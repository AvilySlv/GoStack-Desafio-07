const formatDate = (date: Date): string => {
  const formattedDate = new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);

  return formattedDate;
};

export default formatDate;
