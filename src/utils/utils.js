export const getPeriod = (stringDate) => {
  const [year, month, day] = stringDate.split('-');
  const period = `${year}/${month}`;
  return [period, day];
}