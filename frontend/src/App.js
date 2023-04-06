import './App.css';
import Navbar from './components/navbar'
import SearchBar from './components/SearchBar';
import './index.css';
import Data from "./data.json"
import ParticleBackground from './components/particleBackground/ParticleBackground';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <div className='navbar'> */}
        <Navbar />
        {/* </div> */}

        <div className='landingPageComp1'>
          <div className='heading'>
            {/* <h3 color="red"> Build Your <span color='red'> Custom Code</span></h3> */}
            <h3> Build Your <span> Custom Code </span></h3>
          </div>

          <div className='searchBox' >
            <SearchBar placeHolder={"Search ..."} data={Data} />
          </div>
          <div className="bgDesign">
            <ParticleBackground />
          </div>

        </div>


        <div className='aboutPg'>
          <About />
        </div>


        {/* <div className='aboutPg'>
          <About />
        </div> */}
      </header>
    </div>
  );
}

export default App;
