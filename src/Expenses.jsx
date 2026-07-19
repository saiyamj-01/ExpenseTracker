// // import ExpenseList from "./ExpenseList.jsx"

// export default function Expenses() {
//     return (
//         <div className="flex flex-col items-center pt-10">
//             <h1 className="text-4xl font-semibold pb-10">Expense</h1>
//             <table className="bg-amber-300 border-collapse border">
//                 <thead>
//                     <tr className='border'>
//                         <th className="border px-5 py-3">S.No</th>
//                         <th className="border px-30 py-3">Name</th>
//                         <th className="border px-20 py-3">Amount</th>
//                         <th className="border px-20 py-3">Date</th>
//                         <th className="border px-20 py-3">Delete</th>
//                     </tr>
//                 </thead>

//                 {/* <ExpenseList /> */}
//             </table>
//         </div >
//     )
// }


// import ExpenseList from "./ExpenseList.jsx"
import { X } from 'lucide-react';
export default function Expenses({ expenses, deleteExpenses }) {
    return (
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-4xl font-semibold pb-10">Expense</h1>
            <table className="bg-amber-300 border-collapse border w-300">
                <thead>
                    <tr className='border'>
                        <th className="border px-5 py-3 font-bold">S.No</th>
                        <th className="border px-30 py-3 font-bold">Name</th>
                        <th className="border px-20 py-3 font-bold">Amount</th>
                        <th className="border px-20 py-3 font-bold">Date</th>
                        <th className="border px-20 py-3 font-bold">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((el, idx) => {
                        return (
                            <tr key={el.id}>
                                <td className="border px-5 py-3 text-center font-semibold">
                                    {idx + 1}
                                </td>
                                <td className="border px-30 py-3 text-center font-semibold">
                                    {el.name}
                                </td>
                                <td className="border px-20 py-3 text-center font-semibold">
                                    {el.amount}
                                </td>
                                <td className="border px-20 py-3 text-center font-semibold">
                                    {el.date}
                                </td>
                                <td className="border px-20 py-3 text-center font-semibold">
                                    <X
                                        size={16}
                                        color="#ffffff"
                                        strokeWidth={3}
                                        className='bg-red-500 h-8 w-15 font-bold active:scale-105 cursor-pointer'
                                        onClick={deleteExpenses}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}