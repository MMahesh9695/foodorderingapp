import react , {useState,useContext} from 'react';

export const ThemeContext = react.createContext();
export const ThemeToggle = react.createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function useToggle(){
    return useContext(ThemeToggle)
}

export default function ThemeProvider({children}){

    const [theme, setTheme] = useState(true);

    function toggle(){
        setTheme(prevTheme => !prevTheme);
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <ThemeToggle.Provider value ={toggle}>
                    {children}
                </ThemeToggle.Provider>
            </ThemeContext.Provider>
        </>
    )
}