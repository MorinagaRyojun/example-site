import './App.css';
import {Routes, Route} from 'react-router-dom';

//ImportNav
import HeaderBar from './components/HeaderBar';

//ImportPages
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className='main'>
      <HeaderBar />
      <Routes>
        <Route exact={true} path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
