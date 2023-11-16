import './App.css';
import FruitList from './FruitList';
import Title from './Title';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title />
      <FruitList colour = {"Yellow"} listToShow = {["mangoes", "bananas" , "lemon"]}/>
      <FruitList colour = {"Green"} listToShow = {["lime", "pears" , "apples"]}/>
      <Footer />
    </div>

  );
}

export default App;
