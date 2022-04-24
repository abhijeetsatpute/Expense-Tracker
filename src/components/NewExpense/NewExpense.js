import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
    const [result , setResult] = useState(false);
    const editMode = event => {
        setResult(true)
        if(result){
            <ExpenseForm/>
        }
    }
    const closeEdit = event => {
        setResult(false)
    }
    return (
        <div className='new-expense'>
            {result === true ? <ExpenseForm closeForm={closeEdit}/> :<button onClick={editMode}>Add new Expense</button> }
        </div>
    )
}

export default NewExpense;