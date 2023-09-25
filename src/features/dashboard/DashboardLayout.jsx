import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentBookings} from "./useRecentBooking";
import { useRecentStays } from "./useRecentStay";
import {useGetCabin} from "../cabins/useGetCabin";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {


  const {bookings,isLoading} = useRecentBookings();
  const {isLoading:isLoadingStays,stays,confirmedStays,numDays} = useRecentStays();
  const {cabins,isLoading:isLoadingCabins} = useGetCabin()

  if(isLoading || isLoadingStays || isLoadingCabins) return <Spinner/>
  
  console.log(confirmedStays)

  return (
    <StyledDashboardLayout>
     <Stats bookings={bookings} confirmedStays={confirmedStays} cabinCount={cabins.length} numDays={numDays} />
      <TodayActivity/>
      <DurationChart confirmedStays={confirmedStays}/>
     <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  )

}
export default DashboardLayout;
