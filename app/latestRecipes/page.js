import Image from "next/image"
import Link from "next/link"
import recipes from "../data/recipes"
const LatestRecipes = () => {
    const letestRecipes = recipes.sort((a, b) => a.published_date - b.published_date).slice(0, 8)
    return (
        <main className="container mx-auto px-4 py-8 mt-[100px]">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2">
                        Desserts <span className="text-gray-500 text-2xl font-normal">(98 Recipes)</span>
                    </h1>
                    <p className="text-gray-600">
                        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
                        is a recipe I created after having this dish in a restaurant. Enjoy!
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    letestRecipes.map((letestRecipe) => <Link key={letestRecipe.category_id} href={`/category/${letestRecipe.category_id}`}> <div key={letestRecipe.category_id}

                        className="bg-white rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={letestRecipe.thumbnail}
                            width={100}
                            height={400}
                            alt="Decadent Raspberry and Cream Cake"
                            className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="font-semibold text-lg mb-2">Decadent Raspberry and Cream Cake</h2>
                        </div>
                    </div> </Link>)
                }
            </div>
        </main>
    )
}

export default LatestRecipes