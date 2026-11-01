import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rsvp } from "../services/rsvp";

export const useRSVP = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: rsvp,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
        },
    });
};
