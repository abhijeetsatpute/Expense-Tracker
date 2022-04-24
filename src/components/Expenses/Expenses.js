import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    let newFilteredExpenses = props.expenses.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    )

    let expensesContent = <p>No expenses found.</p>;

    if (newFilteredExpenses.length > 0) {
        expensesContent = newFilteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onYearSelect={selectHandler} />
                {expensesContent}
            </Card>
        </div>
    )
}

export default Expenses;