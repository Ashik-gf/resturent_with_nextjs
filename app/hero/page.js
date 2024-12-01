import Image from "next/image"
import Link from "next/link"
import recipes from "../data/recipes"
const Hero = () => {
    const heroRespic = recipes.map((recipe) => recipe).slice(8, 9)
    return (
        <div>
            <main className="container mx-auto px-4 mt-[100px]">
                <section className="mb-16 bg-orange-50">
                    {
                        heroRespic.map((recipe) => <div key={recipe.category_id} className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <Image
                                    src={recipe.thumbnail}
                                    width={100}
                                    height={400}
                                    alt="Mighty Super Cheesecake"
                                    className="w-full h-[450px] object-cover rounded-lg"
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
                                <p className="text-gray-600 mb-4">

                                    {recipe.description}
                                </p>
                                <Link href={`/category/${recipe.category_id}`}
                                    className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">View Recipe</Link>
                            </div>
                        </div>)
                    }

                </section>
            </main>
        </div>
    )
}

export default Hero