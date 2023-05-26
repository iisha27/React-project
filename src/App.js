import Expenses from './components/Expenses';
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
      <h1> hii</h1>
     <Expenses items={expense}/>

    </div>
  );
}

export default App;
