import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context';
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProductList from './components/productList/productList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div 
    className="App"
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white"
    }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
