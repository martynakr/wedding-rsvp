import { apiCall } from "./apiCall";

interface LoginDetails {
    inviteCode: string;
    password: string;
}
export const login = async (params: LoginDetails) =>
    apiCall("/auth", { method: "POST", body: JSON.stringify(params) });
