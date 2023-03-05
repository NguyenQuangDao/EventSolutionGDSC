import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useUserContext } from './Context/userContext';
import { ContextProivider } from './Context/userContext';
import PageHome from './components/PageHome/PageHome';
import PageCamera from './components/PageCamera/PageCamera';
import PagePosts from './components/PagePosts/PagePosts';
import PageContact from './components/PageContact/PageContact';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
function App() {
  const { loading, user } = useUserContext()
  return (
    <div className="App">
      <ContextProivider>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<PageHome />} />
          <Route path='/posts' element={<PagePosts />} />
          <Route path='/camera' element={<PageCamera />} />
          <Route path='/contact' element={<PageContact />} />
        </Routes>
      </ContextProivider>
    </div>
  );
}

export default App;
