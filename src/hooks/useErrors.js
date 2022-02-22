import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorArrayExists = errors.find((error) => error.field === field);
    if (errorArrayExists) return;

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((c) => c.field === fieldName)?.message;
  }

  return {
    setError, removeError, getErrorMessageByFieldName, errors,
  };
}
