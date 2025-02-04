import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path= "/" element = {<MainPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
