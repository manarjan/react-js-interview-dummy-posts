import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../provider/AuthProvider"
import { login } from "../data/login";

export const useLogin = () => {
    const { login: setLoggedInUser } = useAuth();

    return useMutation({
        mutationFn: login,
        onSuccess: (loginResp) => {
            setLoggedInUser(loginResp.data)
        },
    })
}