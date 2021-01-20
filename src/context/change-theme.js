import React, { createContext, useContext, useReducer } from 'react'

export const ThemeContext = createContext() 


//
const INITIAL_VALUE = {
    color: 'red'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, color: action.payload.color }
        default:
            return state
    }
}



// Step 3
const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUE)
    return (
        <ThemeContext.Provider value={{ state, dispatch }} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;