import {
    useContext,
} from 'react'

import { BudgetContext } from '../context/BudgetContext'

function BudgetButton() {
    const {
        budgetMode,
        setBudgetMode,
    } = useContext(BudgetContext)

    const toggleBudgetMode = () => {
        setBudgetMode(!budgetMode)
    }

    return (
        <button
            className={
                budgetMode
                    ? 'btn btn-warning'
                    : 'btn btn-outline-warning'
            }
            onClick={toggleBudgetMode}
        >
            {budgetMode
                ? 'Disattiva Modalità Budget'
                : 'Attiva Modalità Budget'}
        </button>
    )
}

export default BudgetButton