// TODO: Template fyrir staka uppskrift

import { useRouter } from "next/router";
import { useState } from "react";

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
      <h1>{recipe.name}</h1>
      <h3>Description: {recipe.description}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <h4>Instructions: {recipe.instructions}</h4>
    </>
  )
}


