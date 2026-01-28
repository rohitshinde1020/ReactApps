import React from 'react'
export default function Navbar({ expenses }) {

    const expense = expenses.filter((exp) => exp.type === 'withdrawal').reduce((acc, exp) => acc + exp.amount, 0);
    const income = expenses.filter((exp) => exp.type === 'deposit').reduce((acc, exp) => acc + exp.amount, 0);
    const totalmount = income - expense;

    const today = new Date();
    const Monday = new Date(today);
    Monday.setDate(today.getDate() - (today.getDay() || 7) + 1);

    const Sunday = new Date(Monday);
    Sunday.setDate(Monday.getDate() + 6);

    const total = expenses
        .filter((exp) => {
            const expDate = new Date(exp.date);
            return (
                expDate >= Monday &&
                expDate <= Sunday &&
                exp.type === "withdrawal"
            );
        })
        .reduce((acc, exp) => acc + exp.amount, 0);

    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const monthtotal=expenses.filter((exp)=>{
        const expdate=new Date(exp.date);
        return (
            exp.type==="withdrawal" &&
            expdate>=monthStart &&
            expdate<=monthEnd
        );
    }).reduce((acc,exp)=>acc+exp.amount,0);

    return (
        <>
            <div className='font-bold text-black text-2xl mb-5 '>Expense Tracker</div>
            <div className='text-xl font-semibold mb-5'>Track your income and expenses to manage your money smarter.</div>
            <div flex className='flex gap-2 lg:gap-4 md:gap-3 flex-col sm:flex-row '>
                <div className=" md:w-[300px] w-full  text-white px-5 py-3 flex flex-row md:flex-col justify-between rounded-tl-lg border-red-900 border-b-3 bg border-r-3 gap-4">
                    <p>Your available money after all transactions.</p>
                    
                    <p className='font-bold text-2xl'>₹{totalmount}</p>
                </div>
                
                <div className=" md:w-[300px] w-full  text-white px-5 py-3 flex flex-row md:flex-col justify-between  rounded-tl-lg border-b-3  border-red-900 border-r-3 gap-4">
                   <p>Total money you have spent these month</p>
                    <p className='font-bold text-2xl'>₹{monthtotal}</p>
                </div>
                <div className=" md:w-[300px] w-full  text-white px-5 py-3 flex flex-row md:flex-col justify-between  rounded-tl-lg border-b-3  border-red-900 border-r- gap-4">
                   <p>Expenses from Monday to Sunday.</p>
                    <p className='font-bold text-2xl'>₹{total}</p>
                </div>
            </div>
        </>
    )
}
