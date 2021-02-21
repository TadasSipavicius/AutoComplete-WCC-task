import React, { useState, useEffect } from 'react';

export default function useDebounce(inputValue, delay) {
  /* InputValue - InputValue from TextBox */
  /* Delay - how long ms is executed */

  const [debounceValue, setDebounceValue] = useState(inputValue);


  useEffect(
      () => {
    /* Everything what is in const Handler will be executed after - Delay of ms */
    const handler = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay);

    /* Return a cleanup function.
       useEffect only will be triggered, when InputValue changes
    */
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return debounceValue;
}