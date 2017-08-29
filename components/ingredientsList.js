import Ingredient from './ingredient'
import './ingredientsList.css'

const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>


export default IngredientsList