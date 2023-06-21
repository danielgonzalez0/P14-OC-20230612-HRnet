import statesData from '../assets/data/statesData';

function dateParser(string) {
  let newDate = new Date(string).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }); //fr langue, FR fuseau horaire france
  return newDate;
}

/**
 * create a min or max date depending of a number of years and date.now()
 * @param {number} yearNum number of years to add or remove
 * @param {string} type keywords are "add" or "substract"
 * @returns a dynamic date calculated depending on today and a number of years
 */
function minMaxDate(yearNum, type) {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  let newYear;
  if (type === 'add') {
    newYear = year + yearNum;
  } else if (type === 'substract') {
    newYear = year - yearNum;
  }
  let date = new Date(newYear, month, day).toDateString();
  return date;
}
/**
 * convert a local date in UTC date for datePicker
 * @param {object} date local date to convert
 * @returns a utc date + 1
 */
function convertLocaldateInUTC(date) {
  const localeDate = new Date(date);
  const day = localeDate.getDate() + 1;
  const month = localeDate.getMonth();
  const year = localeDate.getFullYear();
  let UTCDate = new Date(year, month, day).toDateString();
  return UTCDate;
}

function getStateName(stateAbbreviation) {
  const state = statesData.filter(
    (state) => state.value === stateAbbreviation
  );
  console.log(state);
  return state[0].label;
}

export { dateParser, minMaxDate, convertLocaldateInUTC, getStateName};
