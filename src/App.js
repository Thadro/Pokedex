import './App.css';
import Home from'./templates/Home';
import "./styles/main.scss"
import Header from "./components/layout/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
