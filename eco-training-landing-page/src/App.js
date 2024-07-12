import Header from '../src/components/section/Header'
import './App.css';
import Section from '../src/components/section/Section';
import About from './components/section/About';
import Factory from './components/section/Factory';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <About />
      <Factory />
    </div>
  );
}

export default App;
