import { X } from 'lucide-react';

export default function ExpenseList({ expenses }) {
    return (
        <table>
            <tbody>
                {expenses.map((el, idx) => {
                    <tr key={expenses.id} >
                        <td className="border px-5 py-3">
                            {idx + 1}
                        </td>
                        <td className="border px-30 py-3">
                            {expenses.name}
                        </td>
                        <td className="border px-20 py-3">
                            {expenses.amount}
                        </td>
                        <td className="border px-20 py-3">
                            {expenses.date}
                        </td>
                        <td className="border px-20 py-3">
                            <X
                                size={16}
                                color="#ffffff"
                                strokeWidth={3}
                                className='bg-red-500 h-8 w-15 font-bold active:scale-105 cursor-pointer'
                            />
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}