export default function List({ expenses, deleteexpense, filters }) {

    function handledate(expense) {

        const date = new Date(expense.date);
        const options = {

            month: "long",
            day: "numeric",
        };

        return date.toLocaleDateString("en-IN", options);
    }


    const arr = expenses.filter((exp) => filters === 'allEntries' || exp.category === filters);

    return (
        <>
            {arr.length === 0 ? <div className='text-center text-gray-500 mt-20 text-3xl'>No expenses to show , Add New Transaction</div> : arr.map((expense) => (
            <div key={expense.id} className='bg-indigo-500 my-2 p-3 rounded-lg  flex justify-between items-center shadow-lg shadow-black'>
                <div>
                    <p className='text-white text-lg'>{handledate(expense)}</p>
                    <p className='text-gray-700 text-sm '>For:- {expense.category}</p>
                </div>

                

                <div className={`font-bold ${expense.type === 'deposit' ? 'text-green-400' : 'text-red-500'} flex flex-row items-center justify-center gap-2 text-lg`}>
                    <div>{expense.type === 'deposit' ? '+' : '-'}₹{expense.amount}</div>
                    <div>
                        {expense.type === 'deposit' ? (
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                   ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M18 16a2 2 0 11-4 0 2 2 0 014 0zm-8-14a8 8 0 100 16 8 8 0 000-16zm3.707 9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                   )}
                    </div>
                </div>

                <div>
                    <button className='bg-transparent border-none outline-none hover:scale-95 transition-transform duration-200 ease-in-out'
                        onClick={() => deleteexpense(expense.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-red-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>

            </div>
            ))}


            
            
               
               <div className="ml-2">
                   
               </div>


        </>
    )
}
