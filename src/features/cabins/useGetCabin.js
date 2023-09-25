import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins"

export const useGetCabin=()=>{

    const {isLoading,data:cabins,error}=useQuery({
        queryKey: ["cabins"],  //write same as you created in supabase db.
        queryFn: getCabins,
      });
      return({isLoading,cabins,error});
}
