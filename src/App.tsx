import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { useGetTasksQuery } from "./redux/api/baseapi";
import { decrement, increment } from "./redux1/features/counter/couterSlice";
import { AddtaskModal } from "./redux1/features/task/addtask";
import { selectTasks } from "./redux1/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "./redux1/hook";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  // task

  // const tasks = useAppSelector((state)=> state.todo.tasks)

  const tasks = useAppSelector(selectTasks);

  console.log(tasks);


  const {data, isLoading} = useGetTasksQuery(undefined,{
    pollingInterval:30000,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  })
  
  console.log(data)

  if(isLoading){
    return <p>Loading....</p>
  }

  

  return (
    <div>
      <button onClick={() => handleIncrement(5)} className="btn">
        Increment
      </button>
      <div>{count}</div>
      <button onClick={handleDecrement} className="btn">
        decrement
      </button>

      <Button>btn</Button>

      <ModeToggle />

      <AddtaskModal />
    </div>
  );
};

export default App;
