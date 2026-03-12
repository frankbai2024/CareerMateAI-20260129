const getError = (value, errors) => {
  return errors.find((error) => error.match(value))?.message || "";
}

export default getError;