import API_URL from "./api";

export async function authFetch(
    endpoint: string,
    options: RequestInit = {}
) {
    const token = localStorage.getItem("adminToken");

    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
            ...(options.headers || {}),
        },
    });
}