import './App.css';
import {list} from './helper';

function App() {
  function handleClick(task){
    return
  }
  return (
    <div>
     {list.map(function(task){
      return (
      <div className='box'onClick={function(){
        return handleClick(task)
      }}>
        <h2>{task.name}</h2>
        <h2>{task.checked ? 'realizada':'no realizado'}</h2>
      </div>)
     })}
    </div>
  );
}

export default App;
