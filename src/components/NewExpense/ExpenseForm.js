import React, {useState} from 'react'
import './ExpenseForm.css';
const ExpenseForm = () => {
    const[enteredTitle, setEnteredTitle]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
 }
 const amountChangeHandler=(event)=>{
     setEnteredAmount(event.target.value);
}
const dateChangeHandler=(event)=>{
 setEnteredDate(event.target.value);
}

    //--------->If we want one state instead of three 

    // const[userInput, setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });

    // const titleChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle:event.target.value,
    //     });
              // above is not the correct method as it will not give perfect snapshot of pre state so use function instead

           // //   setUserInput((prevState)=>{
           // //       return {...prevState, enteredTitle : event.target.value};
           // //   });
    // };
    // const amountChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount:event.target.value,
    //     });
    // }; 
    //  const dateChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredDate:event.target.value,
    //     });
    // };
    
  const submitHandler=event=>{
    event.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    };
    console.log(expenseData);
  };
  
  return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' steps='0.01' onChange={amountChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2018-01-01' steps='2023-12-31' onChange={dateChangeHandler} />
        </div>
    </div>

    <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
    </div>
    </form>
  )
}

export default ExpenseForm