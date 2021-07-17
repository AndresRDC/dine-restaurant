export const getDateLocalISO = (date) => {
  const tzoffset = date.getTimezoneOffset() * 60000; //timezone offset in milliseconds
  return new Date(date - tzoffset).toISOString().slice(0, -1);
};
export const getDateFromDateLocalISO = (dateLocalISO) => {
  return dateLocalISO.substr(0, 10);
};
export const getTimeFromDateLocalISO = (dateLocalISO) => {
  return dateLocalISO.substr(11, 5);
};
