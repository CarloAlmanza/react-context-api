import {
    useContext,
} from 'react'

import { BudgetContext } from '../context/BudgetContext'

function BudgetInput() {
    const {
        maxPrice,
        setMaxPrice,
    } = useContext(BudgetContext)

    const handleChange = (e) => {
        const value = e.target.value

        // input vuoto = nessun filtro
        if (value === '') {
            setMaxPrice(null)
        } else {
            setMaxPrice(Number(value))
        }
    }

    return (
        <div className="d-flex align-items-center gap-2">
            <label className="text-light">
                Prezzo Max:
            </label>

            <input
                type="number"
                className="form-control"
                placeholder="es. 30"
                value={maxPrice ?? ''}
                onChange={handleChange}
                style={{ width: '120px' }}
            />
        </div>
    )
}

export default BudgetInput