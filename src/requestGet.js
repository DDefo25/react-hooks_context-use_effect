export default async function requestGet (url) {
    const response = await fetch(url)
    return response.json()
}