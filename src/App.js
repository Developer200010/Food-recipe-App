import './App.css';
import { RecipeInfo } from './components/recepiInfo/RecipeInfo';
import { Search } from './components/search/Search';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
  <>
  <div>
    <Routes>
      <Route path='/' element={<Search/>}/>
      <Route path='/:mealId' element={<RecipeInfo/>}/>
    </Routes>
   
  </div>
  </>
  );
}

export default App;
