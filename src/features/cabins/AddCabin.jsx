import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from '../../ui/Modal';

// const AddCabin=()=>{
//     const [showForm,setForm]=useState(false);
// return(
//     <>
//      {!showForm && <Button onClick={()=>setForm((show)=>!show)}>Add new cabin</Button>}
//       {showForm && <Modal onClose={()=>setForm(false)}><CreateCabinForm onClose={()=>setForm(false)}/></Modal>}
//       {showForm && <Button onClick={()=>setForm((show)=>!show)}>Close</Button>}
//     </>

// )
// }

const AddCabin=()=>{
    return(
        <div>
        <Modal>
            <Modal.Open opens='cabin-form'>
                <Button>Add New Cabin </Button>
            </Modal.Open>
            <Modal.Window name='cabin-form'>
                <CreateCabinForm/>
            </Modal.Window>
        </Modal>
        </div>
    );
}
export default AddCabin;