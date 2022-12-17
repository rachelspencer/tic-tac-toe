//import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  const propTest = 'Testing if this works.'
  return (
    <div className="App">
      <Square propVar={propTest}/>
    </div>
  );
}

export default App;