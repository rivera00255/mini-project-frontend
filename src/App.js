import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import SignUp from './components/page/SignUp';
import UserList from './components/page/UserList';
import Edit from './components/page/Edit';
import Main from './components/page/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user' element={<SignUp />} />
          <Route path='/user/:id' element={<Edit />} />
          <Route path='/list' element={<UserList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
