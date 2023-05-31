import './App.css';
import {Routes, Route} from 'react-router-dom';

//ImportNav
import HeaderBar from './components/HeaderBar';

//ImportPages
import HomePage from './pages/Home/HomePage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <div className='main'>
      <HeaderBar />
      <Routes>
        <Route exact={true} path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
