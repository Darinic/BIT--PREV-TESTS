import Search from "./Search";
import '../scss/Header.css'
import SearchMeals from "./SearchMeals";



const Header = (props) => {
    
    return (
        <>
        <div className="Header">
        <h1 style={{fontSize:'30px', marginBottom:'0px',paddingTop:'10px'}}>Meal Search</h1>
        <Search searchButton={props.searchButton}/>
        </div>
        <SearchMeals meals={props.selectedMeal} saveFavorites={props.saveFavorites} />
        </>
    );
}
 
export default Header;