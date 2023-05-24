import './App.css';
import {NavLink, Routes, Route} from 'react-router-dom';

//ImportNav
import HeaderBar from './components/HeaderBar';

//ImportPages
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route exact={true} path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
