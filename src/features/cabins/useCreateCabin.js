import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addEditCabins } from "../../services/apiCabins";

export const useCreateCabin=()=>{


const queryClient=useQueryClient();
const{isLoading:isCreating,mutate:createCabin}=useMutation({
    mutationFn: addEditCabins,
    onSuccess: ()=>{
      toast.success("New Cabin Created Successfully");
      queryClient.invalidateQueries({
        queryKey:['cabins']
      });
    },
    onError:(err)=>{
      toast.error(err.message)
    }
  });

  return({isCreating,createCabin})
}
