
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  {Login}  from './components/Login';
import { Navigation}  from './components/Navigation';
import Overview from './components/Overview';
import People from './components/People';

function App() {
  return (
<BrowserRouter>
<div>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/navigation" element={<Navigation />} >
    <Route path="overview" element={<Overview/>} />
    <Route path="people" element={<People />} />
    </Route>
  </Routes>
</div>
</BrowserRouter>
  );
}

export default App;
