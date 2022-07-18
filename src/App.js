import logo from './logo.svg';
import './App.css';
import Login from './login/login'
import Register from './register/register'
import Home from './home/home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/home' element={< Home />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
