import { useState, useEffect } from 'react';
import styles from '../../styles/Recipes.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Recipe = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
};

// TODO: Index síða fyrir uppskriftir
export default function Recipes() {
  const [numOfRecipes, setNumOfRecipes] = useState(0);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const router = useRouter();

  useEffect(() => {
    const offsetFromUrl = Number(router.query.offset);
    if (!isNaN(offsetFromUrl)) {
      setOffset(offsetFromUrl);
    }
  }, [router.query.offset]);

  async function getAllRecipes() {
    const response = await fetch(
      `http://localhost:3001/recipes?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    setRecipes(data);

    const recipeCount = await fetch(`http://localhost:3001/recipes`);
    const recipeCountData = await recipeCount.json();
    setNumOfRecipes(recipeCountData.length);

    return {
      props: {
        data,
      },
    };
  }

  useEffect(() => {
    getAllRecipes();
  }, [offset]);

  const updatePage = () => {
    setOffset(offset + limit);
  };

  const updatePageBack = () => {
    setOffset(offset - limit);
  };

  return (
    <>
      <h1 className={styles.title}>Uppskriftir</h1>

      <section className={styles.recipeContainer}>
        {// TODO: Útbúa paging?
        recipes.map((recipe) => (
          <div className={styles.recipe} key={recipe.id}>
            <Link
              href={{
                pathname: '/recipes/[id]',
                query: { id: recipe.id },
              }}
            >
              <h2>{recipe.name}</h2>
            </Link>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.description}</p>
          </div>
        ))}
        {offset + limit < numOfRecipes && (
          <Link
            href={`/recipes?limit=${limit}&offset=${offset + limit}`}
            onClick={updatePage}
          >
            Næsta síða
          </Link>
        )}
        {offset > 0 && (
          <Link
            href={`/recipes?limit=${limit}&offset=${offset - limit}`}
            onClick={updatePageBack}
          >
            Fyrri síða
          </Link>
        )}
      </section>
    </>
  );
}
