import "../scss/Search.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import MealList from "./MealList";


const Search = (props) => {
    const [meal, setMeal] =useState('');
    const [mealData, setMealData]=useState([]);
    const [error, setError] =useState(false)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then((response) => response.json())
        .then((data) => setMealData(data.meals.slice(0, 6)))
        .catch((error) => setError(true))
    }, [meal])

    const handleChange = (e) => {
        setMeal(e.target.value)
    }
    const sellectedSearch = (data) => {
        props.searchButton([data])
        setMeal('')
        setError(false)
    }

    const totalSearch = (data) => {
        if(meal.length > 0 ) {
        props.searchButton(data)
        setMeal('')
        setError(false)
        }
    }
  return (
      <>
    <div className="search">
      <div className="card-body">
        <input type="text" placeholder="Enter your meal..." value={meal} onChange={handleChange} />
        <Button variant="primary" onClick={() =>totalSearch(mealData)}>Search</Button>
      </div>
    </div>
    <div className="searchWindow">
          {meal.length >1 ? ( mealData.map((meal) => (
              <div onClick={()=>sellectedSearch(meal)} key={meal.idMeal}>
              <MealList 
              title={meal.strMeal}
              from={meal.strArea}
              />
              </div>
          ))): (error &&
              <p style={{marginTop:'12px',color:'red'}}>Search was not available, please try again later...</p>
          )}
      </div>
    </>
  );
};

export default Search;
