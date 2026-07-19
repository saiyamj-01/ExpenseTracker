import { useState } from "react"

export default function AddBalance({ setBalance }) {

    const [amount, setAmount] = useState("");

    const btnAmount = () => {
        if (amount.trim() === "" || Number(amount) <= 0) {
            alert("Please Enter A Valid Amount!!");
            return;
        }
        setBalance(prev => prev + Number(amount));
        setAmount("");
    }

    return (
        <div className="flex justify-center items-center py-5 mt-5 gap-5">
            <input type="number" placeholder="Enter Amount To Add In Rupee"
                className="border text-center h-10 w-80 rounded-xl no-spinners"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <button className="bg-green-400 text-white text-2xl h-10 rounded-xl w-40 font-bold active:scale-105" onClick={btnAmount}>Add Balance</button>
        </div>
    )
}