import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export const getCabins=async ()=>{

    const { data, error } = await supabase
    .from('cabins')
    .select('*')
    if(error)
    {
        console.error(error)
        throw new Error("Cabins Could Not be Loaded");
    }

    return data;
  
}
export const deletecabins = async(id)=>{

 const { data,error } = await supabase
  .from('cabins')
  .delete()
  .eq('id',id)

  if(error)
    {
        console.error(error)
        throw new Error("Cabins Could Not be Loaded");
    }

    return data;

}


export const addEditCabins=async(newCabin,id)=>{
   const imageName= `${Math.random()}-${newCabin.image.name}`.replaceAll("/","");
   const imagePath= `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
 
// create/edit id
   let query=supabase.from('cabins');
 
// 1.Create Cabin
if(!id) query = query.insert([{...newCabin,image:imagePath}]);

// 2.edit
if(id) query=query.update({...newCabin,image:imagePath}).eq('id', id);

const {data,error}=await query.select().single();


  if(error)
    {
        console.error(error)
        throw new Error("Cabins Could Not be Loaded");
    }
    // 2. Upload Image
const { error:storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)

  // 3. delete if there an error in uploading corresponding details
  if(storageError)
  {
    await supabase
  .from('cabins')
  .delete()
  .eq('id',data.id);
  console.error(storageError)
  throw new Error("Cabins image Could Not be Loaded");
  }

    return data; 

}