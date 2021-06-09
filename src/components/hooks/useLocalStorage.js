import { useState } from 'react';


const useLocalStorage = (key, initialdarkMode) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));

        }
        return initialdarkMode;
    });
    const setValue = (newStoredValue) => {
        setStoredValue(newStoredValue)
        window.localStorage.setItem(key, JSON.stringify(newStoredValue));
    }

    return [storedValue, setValue];
};

export default useLocalStorage;