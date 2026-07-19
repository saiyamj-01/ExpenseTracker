import { useState } from "react"

export default function AddTransaction({ setExpenses, setSpent, setBalance }) {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const btnClick = () => {
        if (name.trim() === "" || Number(amount) <= 0 || date.trim() === "") {
            alert("Please fill all the fields!!");
            return;
        }
        setExpenses((prev) => [
            ...prev,
            {
                id: Date.now(),
                name,
                amount,
                date,
            }
        ]
        )
        setSpent(prev => prev + Number(amount));
        setBalance(prev => prev - Number(amount));
        setName("");
        setAmount("");
        setDate("");
    }



    return (
        <div className="flex flex-col items-center pt-10 gap-8">
            <h1 className="text-4xl text-red-600 font-bold ">Transactions</h1>
            <div className="flex gap-10">
                <input className="border-2 h-10 w-80 text-center font-semibold text-lg rounded-lg" type="text" placeholder="Enter Expense" value={name} onChange={e => setName(e.target.value)} />
                <input className="border-2 h-10 w-80 text-center font-semibold text-lg no-spinners rounded-lg" type="number" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <input className="border-2 h-10 w-80 text-center font-semibold text-lg no-spinners rounded-lg px-2" type="date" value={date} onChange={e => setDate(e.target.value)} />
                <button className="border bg-yellow-500 h-10 w-40 rounded-lg" onClick={btnClick}>Add</button>
            </div>
        </div>
    )
}