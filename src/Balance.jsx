export default function Balance({ balance, spent }) {
    return (
        <div className="flex flex-col items-center mt-10 p-10 bg-blue-400">
            <h1 className="text-5xl font-semibold">Balance</h1>
            <div className="flex pt-15 gap-40 text-3xl">
                <div>
                    <h3>Total Balance</h3>
                    <p className="text-center pt-4">{balance}</p>
                </div>
                <div>
                    <h3>Total Expense</h3>
                    <p className="text-center pt-4">{spent}</p>
                </div>
            </div>
        </div>
    )
}