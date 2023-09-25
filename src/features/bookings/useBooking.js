 
 import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/Constant";
 
 export const useBookings=()=>{
    const [searchParams]=useSearchParams();
    const queryClient=useQueryClient();
    const filterValue=searchParams.get('status');
    const filter= !filterValue || filterValue=== 'all' ?null : {field:'status', value: filterValue}
    
    const sortByRow= searchParams.get('sortBy') || 'startDate-desc';
    const [field,direction]=sortByRow.split('-');
    const sortBy= {field,direction};

    const page= !searchParams.get("page") ? 1 :Number(searchParams.get("page"));

    const {isLoading,
      data:{data:bookings,count}={},
      error}=useQuery({
        queryKey: ["bookings",filter,sortBy,page],  //write same as you created in supabase db.
        queryFn: ()=> getAllBookings({filter,sortBy,page}),
      });

        // PRE-FETCHING
        const pageCount=Math.ceil(count/PAGE_SIZE);
        if(page< pageCount && page > 1)
        {
        queryClient.prefetchQuery({
          queryKey: ["bookings",filter,sortBy,page+1],  //write same as you created in supabase db.
          queryFn: ()=> getAllBookings({filter , sortBy,page:page +1}),
        });
      }
      return({isLoading,bookings,error,count});

 }



