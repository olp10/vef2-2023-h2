// TODO: Template fyrir staka uppskrift

import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Recipes.module.scss";

type Recipe = {
  id: number;
  name: string;
  description: string;
  instructions: string;
  image: string;
}

export default function Recipe() {
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    name: '',
    description: '',
    instructions: '',
    image: ''
  })

  const router = useRouter();
  const { id } = router.query

  async function getRecipe(id : string | string[] | undefined) {
    const response = await fetch(`http://localhost:3001/recipes/${id}`);
    const data = await response.json();
    setRecipe(data);
  }

  getRecipe(id);

  return (
    <>
      <h1 className={styles.recipeName}>{recipe.name.toUpperCase()}</h1>
      <h3 className={styles.recipeDescription}>Description: {recipe.description}</h3>
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt={recipe.name} />
        <p>lorem ipsum</p>
      </div>
      <h4 className={styles.recipeInstructions}>Instructions: {recipe.instructions}</h4>
    </>
  )
}


