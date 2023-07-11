import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./features/banckAccountSlice";

function App() {
  const balance = useSelector((state) => state.bankAccount.balance);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Balance: $ {balance}</h2>
      <button
        onClick={() => { dispatch(deposit(10)) }}
      >
      Deposite: $10  
      </button>
      <button
        onClick={() => { dispatch(withdraw(4)) }}
      >
      Withdraw: $4 if available
      </button>
    </div>
  );
}

export default App;


// useDispatch
// useSelector