import { decrement, increment } from "./redux/features/counter/couterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const {count} = useAppSelector((state)=> state.counter)

  const handleIncrement = (amount: number ) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <button onClick={()=>handleIncrement(5)} className="btn">Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement} className="btn">decrement</button>
    </div>
  );
};

export default App;
