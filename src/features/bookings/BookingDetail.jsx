import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Header";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useGetBooking } from "./useGetBooking";
import Spinner from "../../ui/Spinner";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../check-in-out/useCheckOut";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking,isLoading} = useGetBooking();
  const {checkout,isCheckingOut}=useCheckOut();
  const {isDeleting,deleteBooking}=useDeleteBooking();
  const navigate=useNavigate();

  const moveBack = useMoveBack();

    console.log(isLoading);

  

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  
  
  if(isLoading) return <Spinner/>
  const {status,id:bookingId}=booking;
  
  
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
      {status==='unconfirmed' && <Button icon={<HiArrowDownOnSquare/>}  onClick={()=>navigate(`/checkin/${bookingId}`) }  >
              Check In
            </Button>}
    <Modal>
      <Modal.Open opens="delete">
        <Button variation="danger">Delete Booking</Button>
      </Modal.Open>
      <Modal.Window name='delete'>
        <ConfirmDelete disabled={isDeleting} resourceName="booking" onConfirm={()=>{deleteBooking(bookingId,{onSettled:()=>navigate(-1)})}}/>
      </Modal.Window>
    </Modal>


      {status==='checked-in' && <Button icon={<HiArrowUpOnSquare/>} disabled={isCheckingOut}  onClick={()=>checkout(bookingId)}  >
              Check Out
            </Button>}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
