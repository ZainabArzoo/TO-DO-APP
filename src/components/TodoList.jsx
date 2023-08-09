import React, { useEffect, useState } from "react";
import { AiOutlinePlus,AiFillDelete } from 'react-icons/ai';

const getListData = () => {
  let listData = localStorage.getItem('list');
  if(listData){
    return JSON.parse(localStorage.getItem('list'));
  }
  else{
      return []
  }

}

function TodoList() {

const [List, setList] = useState("");
const [ListData, setListData] = useState(getListData());


    const addList = () => {
        if(!List){
      
        }
        else{
        setListData([...ListData,List]);
        setList("")
  }
}


const removeData = (id)=>{
const updatedata = ListData.filter((val,key)=>{
  return !key == id;
})
setListData(updatedata)
}

const removeAll=()=> {
 setListData([])
}



   useEffect(()=>{
     localStorage.setItem("list", JSON.stringify(ListData))
   },[ListData]);

  return (
    <>
    <div className='container'> 
    <h1 className="heading">TO DO LIST</h1>     
      <div className="input-container">
        <input type="text" placeholder="Add items" 
        className="input"
        value={List}
        onChange={(e) => setList(e.target.value)}
        />  
        <AiOutlinePlus className="add-btn" onClick={addList}/>
        </div>



        {
          ListData.map((val,key)=>{
            return(
              <div className="list-item" key={key}>
              <p>{val}</p>
              <div className="icons">
              <h1><AiFillDelete className="icon-delete" onClick={()=>removeData(key)}/></h1></div>
            </div>
            )
          })
        }

      {ListData.length>= 1 && 
      <div onClick={removeAll}>
        <button className="remove-button">
          Remove All
        </button>    
      </div>}
</div>
    </>
    
  )
}

export default TodoList
