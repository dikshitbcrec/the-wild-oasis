import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import {HiPencil, HiSquare2Stack, HiTrash} from 'react-icons/hi2'
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow=({cabin})=>{
  const [showEditForm,setEditForm]=useState(false);
  const {isDeleting,deleteCabin}=useDeleteCabin();
  return(
    <>
    <TableRow role="row">
      <Img src={cabin.image} alt={cabin.description} />
      <Cabin>{cabin.name}</Cabin>
      <div>Fits up to {cabin.maxCapacity}</div>
      <Price>{cabin.regular}</Price>
      <Discount>{formatCurrency(cabin.discount)}</Discount>
      <div>
      <button><HiSquare2Stack/></button>
      <Modal>
      <Modal.Open opens="edit">
        <button onClick={()=>setEditForm((show)=>!show)}><HiPencil/></button>
      </Modal.Open>
      <Modal.Window name='edit'>
       <CreateCabinForm cabinToedit={cabin}/>
      </Modal.Window>

      <Modal.Open>
      <button><HiTrash/></button>
      </Modal.Open>
      <Modal.Window>
        <ConfirmDelete resourceName="cabins" disabled={isDeleting} onConfirm={()=>deleteCabin(cabin.id)}/>
      </Modal.Window>
      </Modal>
      </div>
    </TableRow>
   
    </>
  )
}
export default CabinRow;

