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
            },
            "allergens": allergens[]-> {
                food_type,
                shortened
            }
        }
        `
    )

    return data
}




export async function getExtras() {
    const data = await sanityClient.fetch(
        `*[_type == 'extras'] | order(_createdAt asc, name)
        {
            _id,
            name,
            price,
            info,
            "allergens": allergens[]-> {
                food_type,
                shortened
            }
        }
        `
    )

    return data
}


export async function getBeverages() {
    const data = await sanityClient.fetch(
        `*[_type == 'beverage'] | order(_createdAt asc, name)
        {
            _id,
            name,
            price,
        }
        `
    )

    return data
}