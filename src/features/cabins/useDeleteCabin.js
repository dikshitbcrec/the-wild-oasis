import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletecabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const useDeleteCabin=()=>{


const queryClient= useQueryClient();
const { isLoading: isDeleting, mutate :deleteCabin } = useMutation({
  mutationFn: deletecabins,
  onSuccess: () => {
    toast.success("Cabin successfully deleted");

    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
  },
  onError: (err) => toast.error(err.message),
});
return ({isDeleting,deleteCabin});
}
