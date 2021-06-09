import useLocalStorage from "./useLocalStorage";


const useDarkMode = (initialdarkMode) => {
    const [darkMode, setDarkMode] = useLocalStorage("enableDarkMode", initialdarkMode);

      return [darkMode, setDarkMode ];
}


export default useDarkMode;
