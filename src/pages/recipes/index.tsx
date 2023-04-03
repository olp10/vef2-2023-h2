import { useState } from 'react';
import styles from '../../styles/Recipes.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Recipe = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
}

// TODO: Index síða fyrir uppskriftir
export default function Recipes() {
  const router = useRouter;
  const [recipes, setRecipes] = useState<Recipe[]>([])

  async function getAllRecipes() {
    const response = await fetch('http://localhost:3001/recipes');
    const data = await response.json();
    setRecipes(data);
  }

  getAllRecipes();

  return (
    <>
        <h1 className={styles.title}>Uppskriftir</h1>

        <section className={styles.recipeContainer}>
        { // TODO: Útbúa paging?
          recipes.map((recipe) => (
            <div className={styles.recipe} key={recipe.id}>
              <Link href={{
                pathname: '/recipes/[id]',
                query: { id: recipe.id }
              }}><h2>{recipe.name}</h2></Link>
              <img src={recipe.image} alt={recipe.name} />
              <p>{recipe.description}</p>
            </div>
          ))
        }
      </section>

    </>

  )
}
