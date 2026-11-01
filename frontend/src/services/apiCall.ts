export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
    // const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const BASE_URL = "https://api.pierreandmartyna.com";

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    });

    if (res.status === 401) {
        throw new Error("Unauthenticated");
    }

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    const resData = await res.json();
    console.log(resData, "res in apiCall");
    console.log(BASE_URL, "base url");
    return resData;
};
