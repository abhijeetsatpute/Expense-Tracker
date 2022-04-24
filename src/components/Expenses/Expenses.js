import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    let newFilteredExpenses = props.expenses.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    )

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onYearSelect={selectHandler} />
                <ExpensesList expenses={newFilteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;