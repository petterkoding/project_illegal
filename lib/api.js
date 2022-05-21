import { sanityClient } from "./sanity"

export async function getAllBurgers() {
    const data = await sanityClient.fetch(
        `*[_type == 'burger'] | order(_createdAt asc, name)
        {
            _id,
            name,
            "slug": slug.current,
            slogan,
            price_single_beef,
            price_double_beef,
            price_single_fish,
            price_double_fish,
            price_single_vegetar,
            price_double_vegetar,
            ingridients,
            double,
            "patties": burger_type[]-> {
                type,
                grams
            }  
        }
        `
    )

    return data
}