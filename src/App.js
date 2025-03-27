import './App.css';
import Frase from './components/Frase';
import List from './components/List';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Frase texto="Olá mundo!" />
      <List />
      <Item item={{ name: 'Fiat', description: 'Marca de Carro conhecida ' }} />  
    </div>
  );
}

export default App;