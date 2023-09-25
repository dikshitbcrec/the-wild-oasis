import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getLogOut } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"

export const useLogOut=() =>{
    const navigate=useNavigate();
    const queryClient=useQueryClient();
    const {mutate:logout ,isLoading}  = useMutation({
        mutationFn:getLogOut,
        onSuccess : () =>
        {
                    queryClient.removeQueries();
                    navigate("/login",{replace:true});
        }
    });
    return({logout,isLoading});
}