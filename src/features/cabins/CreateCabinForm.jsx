import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from 'react-hook-form';
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({cabinToedit={},onClose}) {
 
  const {id:editId,...editValues} = cabinToedit;
  const isEditSession= Boolean(editId);
  
  const {register,handleSubmit,reset,getValues,formState}=useForm(
    {defaultValues:isEditSession ? editValues : {} }); //formState used for taking out error Message;
  const {errors}=formState;
  
 
 
 //for creating 
  const{isCreating,createCabin}= useCreateCabin();

//for updating
  const{isEditing,updateCabin}=useEditCabin();
 
const isWorking= isCreating || isEditing;
  const onSubmit=(data)=>{
    console.log(data);
    if(isEditSession)
    {
      updateCabin({newCabinData:{...data,image:data.image[0]},id:editId});
    }
    else{
      createCabin({...data, image: data.image[0]},{onSuccess:(data)=>
        {
          reset();
          onClose?.();
        
        
        }})
    }
   // mutate({...data, image: data.image[0]});
  }

  const onError=(errors)=>{
   // console.log(errors);

  }
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)} type={onClose?"modal":"regular"}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name",{
          required: "This is required",
        })} />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity",{
          required: "This is required",
          min:{
            value:1,
            message:"Capacity Should be atleast 1"
          }
        })} />
        {errors?.maxCapacity?.message && <Error>{errors.maxCapacity.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register("regular",{
          required: "This is required",
          min:{
            value:1,
            message:"Capacity Should be atleast 1"
          }
        })} />
        {errors?.regular?.message && <Error>{errors.regular.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} {...register("discount",{
          required: "This is required",
          validate: (value) => value <= getValues().regular || "Discount should be less than regular price",
        })} />
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue=""  {...register("description",{
          required: "This is required",
          
        })}/>
        {errors?.description?.message && <Error>{errors.description.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*"  type="file" {...register("image",{
          required: isEditSession?false:"This is required",
        })} />
         {errors?.image?.message && <Error>{errors.image.message}</Error>}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={()=>onClose?.()}>
          Cancel
        </Button>
        <Button disabled={isCreating}>{isEditSession?"Update Data":"Add Data"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
