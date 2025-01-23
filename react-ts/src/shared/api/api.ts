export const BACKEND_URL = "http://localhost:8080"

export async function api<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const data = await (await response.json() as Promise<{ data: T }>)
    return data.data
}
