import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rsvp } from "../services/rsvp";
import { toast } from "react-toastify";

export const useRSVP = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: rsvp,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            toast.success("RSVP submitted successfully! Thank you!");
        },
        onError: () => {
            toast.error("Failed to submit RSVP. Please try again.");
        },
    });
};
