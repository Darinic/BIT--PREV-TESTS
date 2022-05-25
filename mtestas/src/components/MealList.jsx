import '../scss/mealList.css'

const MealList = (props) => {
    return (  
        <div className="Bar">
            <p className="mainText"><strong>{props.title}</strong> <br/>
            <span className="subText">Nationality:<i>{props.from}</i></span></p>
        </div> 
    );
}
 
export default MealList;