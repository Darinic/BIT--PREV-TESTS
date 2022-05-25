import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import MainNavigation from './navigation/MainNavigation';
import { useState } from 'react';
import useLocalStorage from './storage/useLocalStorage';
import FavoriteList from './components/FavoriteList';


function App() {
  const [selectedMeal, setSelectedMeal] = useState([])
    const [favorites, setFavorites] =useLocalStorage("favorites", [])
    

    const searchButton= (data) => {
        setSelectedMeal(data)
      }
      const saveFavorites = (data) => {
        setFavorites([...favorites, data])
      }
const handleDelete = (index) => {
  console.log(index)
  const copyData= [...favorites]
  console.log(copyData)
  copyData.splice(index, 1);
  setFavorites(copyData)
}

  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Header searchButton={searchButton} selectedMeal={selectedMeal} saveFavorites={saveFavorites}/>} />
        <Route path='/favorites' element={<FavoriteList fav={favorites} delete={handleDelete}/>} />
      </Routes>
    </div>
  );
}

export default App;
