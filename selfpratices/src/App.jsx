import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App