export const handleMoneyVND = (money: string) => {
  return parseInt(money).toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
};
