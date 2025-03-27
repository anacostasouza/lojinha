import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Item item={{ name: 'Fiat', description: 'Marca de Carro conhecida ' }} />  
    </div>
  );
}

export default App;