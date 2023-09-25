import Header from "../ui/Header";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
    <Row type="horizontal">
      <Header as="h1">All bookings</Header>
      <BookingTableOperations/>
    </Row>
      <BookingTable/>
    </>
  );
}

export default Bookings;
