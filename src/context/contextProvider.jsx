import React, {useState, createContext, useContext, useEffect} from 'react'
const StateContext = createContext();

const initialState = {
    chat:false,
    userProfile:false,
    cart:false,
    notification:false
}


export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined); 
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value) ;
        setThemeSettings(false);
    }

    const setColor = (e) => {
        setCurrentColor(e);
        localStorage.setItem('colorMode ',e) ;
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        console.log(clicked);
         setIsClicked({...initialState, [clicked]:true});
       
    }
    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor,currentMode,themeSettings, setThemeSettings,setMode, setColor }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);