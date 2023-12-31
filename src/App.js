import './App.css';
import Homepage from './pages/Homepage';
import Celebritiespage from './pages/Celebritiespage';
import Randomcelebrity from './pages/Randomcelebrity';
import Celebritydetailspage from './pages/Celebritydetailspage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import TvSpeakersPage from './pages/TvSpeakersPage';
import CopyrightPage from './pages/Copyrightpage';
import FormMessagePage from './pages/FormMessagePage';
import LikesPage from './pages/LikesPage';
import CocktailsPage from './pages/CocktailsPage';

function App () {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/celebrities" element={<Celebritiespage />} />
           <Route path="/celebrities/:id" element={<Celebritydetailspage />} />
           <Route path="/randomcelebrity" element={<Randomcelebrity />} />  
           <Route path="/speakers" element={<TvSpeakersPage />} />   
           <Route path="/copyright" element={<CopyrightPage />} />   
           <Route path="/message" element={<FormMessagePage />} />  
           <Route path="/likespage" element={<LikesPage />} />  
           <Route path="/cocktails" element={<CocktailsPage />} /> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
