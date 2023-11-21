import './App.css';
import Homepage from './pages/Homepage';
import Celebritiespage from './pages/Celebritiespage';
import Randomcelebrity from './pages/Randomcelebrity';
import Celebritydetailspage from './pages/Celebritydetailspage';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App () {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/celebrities" element={<Celebritiespage />} />
           <Route path="/celebrities/:id" element={<Celebritydetailspage />} />
           <Route path="/randomcelebrity" element={<Randomcelebrity />} />        
        </Routes>
      </BrowserRouter>
  );
}

export default App;
