
import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary"

 export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid"  alt="logo" />
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer">
  This project was coded by{" "}
  <a
    href="https://github.com/BexCdz"
    target="_blank"
    rel="noopener noreferrer"
  >
    Rebecca
  </a> and is <a href="https://github.com/BexCdz/dictionary-project" target="_blank"> open sourced</a>
</footer>
      </div>
    </div>
  );
}


