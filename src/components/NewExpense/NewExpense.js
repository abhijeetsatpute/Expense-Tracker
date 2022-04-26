import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [result, setResult] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setResult(false);
    };

    const editMode = event => {
        setResult(true)
    }
    const closeEdit = event => {
        setResult(false)
    }
    return (
        <div className='new-expense'>
            {result === true ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={closeEdit} /> : <button onClick={editMode}>Add new Expense</button>}
        </div>
    )
}

export default NewExpense;