import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/login";

const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: login,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
        },
    });
};

export default useLogin;
