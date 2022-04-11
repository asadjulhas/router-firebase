import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
