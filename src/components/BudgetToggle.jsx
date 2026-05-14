import {
    useContext,
} from 'react'

import { BudgetContext } from '../context/BudgetContext'

function BudgetToggle() {
    const {
        budgetMode,
        setBudgetMode,
    } = useContext(BudgetContext)

    return (
        <div className="form-check form-switch text-light">
            <input
                className="form-check-input"
                type="checkbox"
                checked={budgetMode}
                onChange={() =>
                    setBudgetMode(!budgetMode)
                }
            />

            <label className="form-check-label">
                Budget Mode
            </label>
        </div>
    )
}

export default BudgetToggle