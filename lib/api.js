export async function getAllBurgers() {
    const data = await client.fetch(
        `*[_type == "burger]{
        }`
    )

    return data
}