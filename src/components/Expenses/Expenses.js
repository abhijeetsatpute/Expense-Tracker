import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
                <ExpensesChart expenses={newFilteredExpenses} />
                <ExpensesList expenses={newFilteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;