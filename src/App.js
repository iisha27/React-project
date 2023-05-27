import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES=[
  {
    id:1,
    title:"Toilet paper",
    amount:29,
    date:new Date(2021, 3, 21)

  },
  {
    id:2,
    title:"TV Set",
    amount:14,
    date:new Date(2022, 1, 21)

  },
  {
    id:3,
    title:"Bathing Tub",
    amount:100,
    date:new Date(2022, 10, 29)

  },
  {
    id:4,
    title:"Perfume",
    amount:101,
    date:new Date(2022,1, 29)

  }
]
function App() {
  const[expenses, setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{
     setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
     });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses}/>

    </div>
  );
}

export default App;
