import { useState, createContext, useContext } from 'react'

const ToggleContext = createContext(null)

export const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggle, setToggle }}>
           <div>
               <h1>Toggle</h1>
               <ChildToggle />
               <ChildDisplay />
            </div>
        </ToggleContext.Provider>
    );
};

const ChildToggle = () => {
    const {setToggle} = useContext(ToggleContext)
    return (
        <div>
            <button onClick={() => setToggle((prev) => !prev)}>Toggle State</button>
        </div>
    );
};

const ChildDisplay = () => {
    const { toggle } = useContext(ToggleContext)
    return (
        <div>
            <p> Current State: {toggle ? "ON" : "OFF"}</p>
        </div>
    );
};
