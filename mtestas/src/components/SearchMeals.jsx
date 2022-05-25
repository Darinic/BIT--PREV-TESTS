import Meals from "./Meals";

const SearchMeals = (props) => {
    return (  
        <div className='row' style={{marginLeft:'1rem', marginRight:'1rem', columnGap:'1rem', justifyContent:'center', zIndex:2, marginBottom:'2rem'}}>
        {props.meals.length > 0 ?
        (props.meals.map((meal) => (
          <Meals 
                key={meal.idMeal}
                title={meal.strMeal}
                category={meal.strCategory}
                from={meal.strArea}
                picture={meal.strMealThumb}
                source={meal.strSource}
                ing1={meal.strIngredient1}
                ing2={meal.strIngredient2}
                ing3={meal.strIngredient3}
                ing4={meal.strIngredient4}
                ing5={meal.strIngredient5}
                ing6={meal.strIngredient6}
                ing7={meal.strIngredient7}
                ing8={meal.strIngredient8}
                ing9={meal.strIngredient9}
                ing10={meal.strIngredient10}
                ing11={meal.strIngredient11}
                ing12={meal.strIngredient12}
                ing13={meal.strIngredient13}
                ing14={meal.strIngredient14}
                ing15={meal.strIngredient15}
                ing16={meal.strIngredient16}
                ing17={meal.strIngredient17}
                ing18={meal.strIngredient18}
                ing19={meal.strIngredient19}
                ing20={meal.strIngredient20}
                saveFavorites={() =>props.saveFavorites(meal)}
          />
         ))): (
           <p>Meal has not been chosen yet</p>
         )}
      
                </div>
    );
}
 
export default SearchMeals;