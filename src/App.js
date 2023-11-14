import './App.css';
import FruitList from './FruitList';
import Title from './Title';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title />
      <ul>
        <FruitList />
      </ul>
      <Footer />
    </div>

  );
}

export default App;
