
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EditProject from './components/EditProject';




function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/user/:id/projects' element={<Dashboard/>}></Route>
    <Route path='/user/:id/projects/edit/:projectId' element={<EditProject/>}></Route>
  </Routes>

  </>
  );
}

export default App;
