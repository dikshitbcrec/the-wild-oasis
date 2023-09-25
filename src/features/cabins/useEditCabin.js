import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addEditCabins } from "../../services/apiCabins";

export const useEditCabin=()=>{

const queryClient=useQueryClient();
const{isLoading:isEditing,mutate:updateCabin}=useMutation({
    mutationFn: ({newCabinData,id})=> addEditCabins(newCabinData,id),
    onSuccess: ()=>{
      toast.success("Cabin updated Successfully");
      queryClient.invalidateQueries({
        queryKey:['cabins']
      });
    },
    onError:(err)=>{
      toast.error(err.message)
    }
  });
  return({isEditing,updateCabin});
}