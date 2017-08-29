import './ingredient.css'

const Ingredient = ({ amount, measurement, name }) =>
    <li className="ingredient">
        <span className="amount">{amount}</span>
        <span className="measurement">{measurement}</span>
        <span className="name">{name}</span>
    </li>

export default Ingredient