import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expense=[
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
  return (
    <div>
      <NewExpense />
     <Expenses items={expense}/>

    </div>
  );
}

export default App;
