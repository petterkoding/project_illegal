import { sanityClient } from "./sanity"

export async function getAllBurgers() {
    const data = await sanityClient.fetch(
        `*[_type == 'burger']{
            _id,
            name,
            "slug": slug.current,
            slogan,
            price_single,
            price_double,
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