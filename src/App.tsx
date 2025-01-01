import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/couterSlice";
import { AddtaskModal } from "./redux/features/task/addtask";
import { selectTasks } from "./redux/features/task/taskSlice";
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

  // task
 
  // const tasks = useAppSelector((state)=> state.todo.tasks)

  const tasks = useAppSelector(selectTasks)

  console.log(tasks);
  

  return (
    <div>
      <button onClick={()=>handleIncrement(5)} className="btn">Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement} className="btn">decrement</button>
      
      <Button>btn</Button>  

      <ModeToggle/>
      
      <AddtaskModal/>
    
    </div>
  );
};

export default App;
