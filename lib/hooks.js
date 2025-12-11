// lib/hooks.js
import { useState, useEffect } from 'react';

// This hook delays updating a value until a certain amount of time has passed without that value changing.
// This is useful for performance-heavy tasks like API calls on user input.
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the specified delay.
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // If the value changes (e.g., user types again), clear the previous timer and start a new one.
    // This is the core of the debounce logic.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run the effect if the value or delay changes.

  return debouncedValue;
}
