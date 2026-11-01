import { useQuery } from "@tanstack/react-query";
import {
    getCurrentInvite,
    type InviteDetails,
} from "../services/currentInvite";

const useAuth = () => {
    return useQuery<InviteDetails>({
        queryKey: ["auth"],
        queryFn: getCurrentInvite,
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
};

export default useAuth;
