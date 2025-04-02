import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter props="date" />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());

  function handleMinus() {
    setStep((s) => s - 1);
  }
  function handlePlus() {
    setStep((s) => s + 1);
  }
  function handleMinusCount() {
    setCount((s) => s - step);
    // const nextDate = new Date(date);
    // nextDate.setDate(nextDate.getDate() - step);
    // setDate(nextDate);
  }
  function handlePlusCount() {
    setCount((s) => s + step);
    // const nextDate = new Date(date);
    // nextDate.setDate(nextDate.getDate() + step);
    // setDate(nextDate);
  }

  //This is new!  I didn't realize Date is set this way!
  const date = new Date();
  date.setDate(date.getDate() + count);

  function daysMessage() {
    if (count === 0) {
      return "Today is ";
    } else if (count === 1) {
      return `${count} day from today is `;
    } else if (count === -1) {
      return `${Math.abs(count)} day ago was `;
    } else if (count > 1) {
      return `${count} days from today is `;
    } else return `${Math.abs(count)} days ago was `;
  }

  return (
    <>
      <div>
        <button onClick={handleMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <div>
        <button onClick={handleMinusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handlePlusCount}>+</button>
      </div>
      <p>
        <span>{daysMessage()}</span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
