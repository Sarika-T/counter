import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './utils/DataStore';
import SignUp from './components/MainPage/SignUp';
import { AuthProvider } from './utils/AuthConfig/AuthProvider';
import SignIn from './components/MainPage/SignIn';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <HashRouter>
          <div className='App'>
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/dashboard" element={<MainPage />} />
              <Route path="/login" element={<SignIn />} />
            </Routes>
          </div>
        </HashRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
