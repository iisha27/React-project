import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React , {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

 
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
       {/* {filteredExpenses.length===0 && <p>No Expense Found</p>}  {/* after part will be rendered if first condition is true */}
      {/*filteredExpenses.length>0 && filteredExpenses.map(expense=><ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>)} */}
      {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
    </Card>
  )
}

export default Expenses