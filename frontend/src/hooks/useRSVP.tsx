import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rsvp } from "../services/rsvp";
import { toast } from "react-toastify";
import { translation } from "../helpers/translation";

const toastText = {
    success: {
        EN: "RSVP submitted successfully! Thank you!",
        PL: "Odpowiedź przesłana pomyślnie! Dziękujemy!",
    },
    error: {
        EN: "Failed to submit RSVP. Please try again.",
        PL: "Nie udało się przesłać odpowiedzi. Spróbuj ponownie.",
    },
};

export const useRSVP = (language: "PL" | "EN" = "EN") => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: rsvp,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            toast.success(translation(language, "success", toastText));
        },
        onError: () => {
            toast.error(translation(language, "error", toastText));
        },
    });
};
