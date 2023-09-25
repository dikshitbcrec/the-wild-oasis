import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export const useSetting=()=>{
    const {isLoading,error,data:settings}=useQuery({
        queryKey:["settings"],
        queryFn: getSettings
        
    });
    console.log(isLoading);
    return({isLoading,error,settings});
}