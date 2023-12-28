
import { incNumber, decNumber } from './action/Action';
import { useSelector, useDispatch} from 'react-redux';
import './App.css';

function App() {
   const myState = useSelector((state)=>state.chanageTheNumber)
   const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={()=> dispatch(incNumber())}>increment</button>
      <button onClick={()=> dispatch(decNumber())}>decremnet</button>
    </div>
  );
}

export default App;
