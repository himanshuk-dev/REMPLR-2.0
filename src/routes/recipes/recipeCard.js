import "../../styles/recipes/recipes.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipes-card" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipes-dietary-icons">
        {recipe.vegetarian && <span title="Vegetarian">🌱</span>}
        {recipe.vegan && <span title="Vegan">🥕</span>}
        {recipe.dairyFree && <span title="Dairy-Free">🥛❌</span>}
      </div>
      <h3>{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;
