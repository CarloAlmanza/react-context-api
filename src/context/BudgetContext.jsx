import {
    createContext,
    useState,
} from 'react'

export const BudgetContext =
    createContext()

function BudgetProvider({ children }) {
    // null = nessun filtro
    const [maxPrice, setMaxPrice] =
        useState(null)

    return (
        <BudgetContext.Provider
            value={{
                maxPrice,
                setMaxPrice,
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}

export default BudgetProvider