function dateParser(string) {
  let newDate = new Date(string).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }); //fr langue, FR fuseau horaire france
  return newDate;
}

export { dateParser };
