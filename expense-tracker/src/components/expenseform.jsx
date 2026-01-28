import { useState } from 'react';
function Expenseform({ addexpense, setshowform }) {
    const [amount, setamount] = useState("");
    const [title, settitle] = useState(" ");
    const [category, setcategory] = useState("food");
    const [type, settype] = useState('withdrawal');

    const submit = (e) => {
        if (!title || !amount) {
            e.preventDefault();
            alert("Please fill all fields");
        }

        else {
            e.preventDefault();
            addexpense(
                {
                    title: title,
                    amount: Number(amount),
                    category: category,
                    id: Date.now(),
                    type: type,
                    date: new Date().toISOString()

                }
            );
            setamount("");
            settitle("");
            setcategory("food");
            setshowform(false);
        }
    }
    return (
        <>
            <div className='shadow-lg shadow-black z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-5 px-5 rounded-xl bg-red-500 w-[320px] text-white'>
                <h1 className='text-center font-bold'>ADD TRANSACTIONS</h1>
                <form onSubmit={submit} className='mt-3'>
                    <label >Enter Title :</label><br></br>
                    <input type="text" placeholder='Enter Title' value={title} onChange={(e) => settitle(e.target.value)} className='border-2 border-gray-400 rounded-sm mb-3 w-full' /><br />
                    <label >Enter the amount :</label><br></br>
                    <input type="number" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} className='border-2 border-gray-400 rounded-sm px-2 w-full' /><br />
                    <div className='flex justify-between items-center'>
                        <label htmlFor="selectbox">select category :</label>
                        <select name="something" id="selectbox" className='my-3 px-2 py-1 border-2 border-gray-400 rounded-sm ml-3 '
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}>
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="shopping">shopping</option>
                            <option value="Travelling">Travelling</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="type">Select Type :</label>
                        <select name="type" id="type" className='my-3 px-2 py-1 border-2 border-gray-400 rounded-sm ml-3'
                            value={type}
                            onChange={(e) => settype(e.target.value)}>
                            <option value="withdrawal">Withdrawal</option>
                            <option value="deposit">Deposit</option>
                        </select>
                    </div>

                    <div className='flex justify-between'>
                        <button type='submit' className='bg-red-600 p-2 self-center rounded-md mt-3 flex items-center shadow-lg shadow-orange-950 '>Add Transaction</button>
                        <button onClick={() => setshowform(false)} className='bg-red-600 p-2 self-center rounded-md mt-3 flex items-center ml-2 shadow-lg shadow-orange-950'>Cancel</button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Expenseform;