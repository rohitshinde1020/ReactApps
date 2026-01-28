


import { useEffect, useState } from 'react'
import './App.css'
import Expenseform from './components/expenseform.jsx'
import Navbar from './components/navbar.jsx'
import List from './components/list.jsx';

// I implemented deposit and withdrawal functionality by adding a transaction type 
// field and calculating income, expenses, and balance dynamically using React state
//  and array reduce operations.
function App() {

  const [expenses, setexpenses] = useState([]);
  const [showform, setshowform] = useState(false);
  const [filters, setfilters] = useState("allEntries");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("expenses"));
    if (data) setexpenses(data);
  }, []);

  function addexpense(expense) {
    setexpenses(prev => [...prev, expense]);
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function deleteexpense(id) {
    const data = expenses.filter((exp) => exp.id !== id);
    setexpenses(data);
  }


  return (
    <>
      <div className='  w-full min-h-screen sm:px-4 px-8 py-5 bg-gradient-to-r from-red-600 to-pink-500'>
        <Navbar expenses={expenses} />

        <div className=''>
          <button onClick={() => setshowform(!showform)}
            className='bg-green-400 p-3 w-auto rounded-xl  fixed bottom-[10%] right-[10%] min-h-6 ' >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          {showform && <Expenseform addexpense={addexpense} setshowform={setshowform} />}
          {showform && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-2"></div>
          )}
        </div>

        <div className='flex flex-col w-full md:w-2/5 mx-auto mt-10'>

          <div className='flex justify-between mb-3 '>
            <button onClick={() => setfilters("allEntries")} className="bg-white shadow-xl shadow-black text-red-700 font-bold px-4 py-1 rounded-lg mb-2">All Entries</button>
            <select name="" id="" className='outline-none cursor-pointer bg-white shadow-xl shadow-black text-red-700 font-bold px-4 py-1 rounded-lg mb-2'
              onChange={(e) => setfilters(e.target.value)}>
              <option value="food" >Food</option>
              <option value="transport">Transport</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="travelling">Travelling</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className=' p-3 h-[400px] overflow-y-scroll no-scrollbar bg-white rounded-3xl shadow-lg shadow-black'>
            <List expenses={expenses} deleteexpense={deleteexpense} filters={filters} />
          </div>

        </div>



      </div>
    </>
  )
}

export default App


