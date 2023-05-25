import ExpenseItem from './components/ExpenseItem';
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
      title:"Soap",
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
    <div className="App">
      <h1>Heyy</h1>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} />

    </div>
  );
}

export default App;
