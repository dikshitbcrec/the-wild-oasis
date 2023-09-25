import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export const useEditSettings=()=>
{
        const queryClient=useQueryClient();



        // const{isLoading:isUpdating,mutate:updateSetting}=useMutation({
        //     mutationFn:updateSetting,
        //     onSuccess: ()=>{
        //       toast.success("Setting updated Successfully");
        //       queryClient.invalidateQueries({
        //         queryKey:['settings']
        //       });
        //     },
        //     onError:(err)=>{
        //       toast.error(err.message)
        //     }
        //   });
        //   return({isUpdating,updateSetting});

    
  
          const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
            mutationFn: updateSettingApi,
            onSuccess: () => {
              toast.success("Setting successfully edited");
              queryClient.invalidateQueries({ queryKey: ["settings"] });
            },
            onError: (err) => toast.error(err.message),
          });
        
          return { isUpdating, updateSetting };

}


