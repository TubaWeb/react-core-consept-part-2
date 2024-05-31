import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  // Normal function
  function handleClick(){
    alert('handle clicked');
  }

  // Arrow function
  const handleClick2 = () => {
    alert('handle clicked 2');
  }

  // Parameter with Arrow function
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h2>React core concept part-2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>

      {/* Button with among the functions uses */}
      <button onClick={() => {alert('third clicked')}}>Third clicked</button>

      {/* vajallilla ase */}
      <button onClick={() => {addToFive(3)}}>Four</button>
    </>
  )
}

export default App
