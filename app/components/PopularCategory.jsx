import Image from "next/image";
import Link from "next/link";
import categories from "../data/categories";
const PopularCategory = () => {
    const slicedCategory = categories.slice(0, 6);
    return (
        <section className="mb-16">
            <div className="flex justify-between items-top">
                <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
                <Link href="/categories" className="text-orange-500">View All</Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {
                    slicedCategory.map((category) => <Link
                        href={`/categories/${category.id}`}
                        key={category.id}>
                        <div className="cursor-pointer text-center group">
                            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                                <Image
                                    src={category.image}
                                    width={100}
                                    height={300}
                                    alt="Breakfast"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <p className="transition-transform duration-300 group-hover:scale-105">{category.name}</p>
                        </div> </Link>)
                }

            </div>
        </section>
    )
}

export default PopularCategory