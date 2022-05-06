import { sanityClient } from "./sanity"

export async function getAllBurgers() {
    const data = await sanityClient.fetch(
        `*[_type == 'burger']`
    )

    return data
}