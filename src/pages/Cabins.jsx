
import Header from "../ui/Header";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
function Cabins() {
  return (
    <>
    <Row type="horizontal">
        <Header as="h1">All cabins</Header>
        <CabinTableOperations/>
      </Row>
    
     <Row type="vertical">
      <CabinTable/>
      <AddCabin/>
    </Row>
    </>

  );
}

export default Cabins;
