import AppName from "./AppName"
import Balance from "./Balance"
import AddBalance from "./AddBalance"
import AddTransaction from "./AddTransaction"
import Expenses from "./Expenses"
import { useState } from "react"

export default function App() {

  const [expenses, setExpenses] = useState([])
  const [balance, setBalance] = useState(0);
  const [spent, setSpent] = useState(0);

  const deleteExpenses = (id) => {
    const copyExpense = [...expenses];
    copyExpense.splice(id, 1);
    setExpenses(copyExpense)
  }

  return (
    <div>
      <AppName name="Expense Tracker" />
      <AddBalance setBalance={setBalance} />
      <Balance balance={balance} spent={spent} />
      <AddTransaction setExpenses={setExpenses} setSpent={setSpent} setBalance={setBalance} />
      <Expenses expenses={expenses} deleteExpenses={deleteExpenses} />
    </div>
  )
}