import Box from './component/Box';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const Sum = () => {
    dispatch({type: 'INCREMENT' });
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Sum}>클릭</button>
      <Box />
    </div>
  );
}

export default App;
