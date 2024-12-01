"use client"
import Image from "next/image";
import Link from "next/link";
import categories from "../data/categories";
import recipes from "../data/recipes";

const LatestRecipys = () => {
    const latestRecipes = recipes.filter((recipe) =>
        categories.filter((category) => category.id === recipe.category_id)
    );

    const sortedRecipes = latestRecipes.sort(
        (a, b) => new Date(b.published_date) - new Date(a.published_date)
    );

    const latestFourRecipes = sortedRecipes.slice(0, 4);

    const latestRecipeCategories = latestFourRecipes.map((recipe) =>
        categories.find((category) => category.id === recipe.category_id)
    );
    console.log(latestRecipeCategories);
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {latestFourRecipes.map((recipe, index) => (
                    <Link key={recipe.id}
                        href={`/category/${recipe.category_id}`}>
                        <div >
                            <Image
                                src={recipe.thumbnail}
                                width={100}
                                height={300}
                                alt="Chicken Tikka Masala"
                                className="w-full h-[300px] object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                            {latestRecipeCategories[index] && ( // Check if category exists before accessing its name
                                <p className="text-gray-600">{latestRecipeCategories[index].name}</p>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default LatestRecipys