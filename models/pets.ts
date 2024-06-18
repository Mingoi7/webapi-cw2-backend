import * as db from '../helpers/database';
 

export const getById = async (id: any) => {
  let query = 'SELECT * FROM pets WHERE ID = ?';
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

export const getAll = async  (limit=10, page=1, order:any, direction:any) =>{
  const offset = (page - 1) * limit;
  const query = "SELECT * FROM pets LIMIT  ? OFFSET  ?;";
  const data = await db.run_query(query, [limit, offset]);
  return data;
}

export const add = async(pet: any) => {
  let keys = Object.keys(pet);
  let values = Object.values(pet);
  let key = keys.join(',');
  let param = '';
  for(let i: number = 0; i<values.length; i++) {
    param += '? ,';
  }
  param=param.slice(0, -1);
  let query = `INSERT INTO pets (${key}) VALUES (${param})`;
  try {
    await db.run_insert(query, values);
    return {status: 201};
  } catch(err: any) {
    return err;
  }
}

export const  update= async(pet:any,id:any)  =>{  
    
  //console.log("pet " , pet)
 // console.log("id ",id)
  let keys = Object.keys(pet)
  let values = Object.values(pet)  
  let updateString=""
  for(let i: number = 0; i<values.length;i++){updateString+=keys[i]+"="+"'"+values[i]+"'"+"," }
 updateString= updateString.slice(0, -1)
 // console.log("updateString ", updateString)
  let query = `UPDATE pets SET ${updateString} WHERE ID=${id} RETURNING *;`
  try{
   await db.run_query(query, values)  
    return {"status": 201}
  } catch(error) {
    return error
  }
}

export const deleteById = async (id:any) => {
  let query = "Delete FROM pets WHERE ID = ?"
  let values = [id]
  try{
    await db.run_query(query, values);  
    return { "affectedRows":1 }
  } catch(error) {
    return error
  }
}