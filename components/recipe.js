import IngredientsList from './ingredientsList'
import Instructions from './instructions'
import './recipe.css'

const Recipe = ({name, ingredients, steps}) => (
    <section id={name.toLowerCase().replace(/ /g, "-")} className="recipe">
        <h1>{name}</h1>
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
    </section>
)

export default Recipe