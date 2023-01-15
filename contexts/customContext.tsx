import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface CustomContextProps {
    customString: boolean;
    setCustomString: Dispatch<SetStateAction<boolean>>;
    gridString: boolean;
    setGridString: Dispatch<SetStateAction<boolean>>;
}

interface CustomContextProviderProps {
    children: ReactNode;
}

const CustomContext = createContext<CustomContextProps>({
    customString: false,
    setCustomString: () => {}, 
    gridString: false,
    setGridString: () => {}, 
});

const CustomContextProvider = ({children}: CustomContextProviderProps) => {
    const [customString, setCustomString] = useState(false);
    const [gridString, setGridString] = useState(false);
    

    return (
        <CustomContext.Provider value={{customString, setCustomString, gridString, setGridString}}>
                {children}
        
        </CustomContext.Provider>
    )
}


export { CustomContext, CustomContextProvider};