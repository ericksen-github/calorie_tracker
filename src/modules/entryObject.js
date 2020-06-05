const EntryFactory = (date, array) => {
  const weight = array[0];
  const calorie = array[1];
  const exercise = array[2];
  const protein = array[3];
  return {
    date,
    weight,
    calorie,
    exercise,
    protein,
  };
};

export { EntryFactory };
