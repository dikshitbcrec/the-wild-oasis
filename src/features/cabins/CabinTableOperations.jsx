import TableOperation from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

const CabinTableOperations =()=>{
    return(
        <TableOperation>
          <Filter filterField="discount" options={[
            {value:"all",label:"All"},
            {value:"no-discount",label:"No discount"},
            {value:"with-discount",label:"With-discount"}
          ]}/>

          <SortBy options={[
            {value:'name-asc',label:"Sort By name A-Z"},
            {value:'name-dsc',label:"Sort By name Z-A"},
            {value:'regularPrice-asc',label:"Sort By Price (low First)"},
            {value:'regularPrice-desc',label:"Sort By Price (high first)"},
            {value:'maxCapacity-asc',label:"Sort By name capacit(low)"},
            {value:'maxCapacity-desc',label:"Sort By name capacit(high)"}
          ]}/>
        </TableOperation>
    )

}
export default CabinTableOperations;