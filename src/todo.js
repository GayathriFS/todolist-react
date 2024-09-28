import { useState } from "react";

function Todo() {
  const [list, setList] = useState([{id:1, activity:"apple"},{id:2, activity:"orange"}]);
 const[newitem,setnewitem] = useState("")
  function handleDelete(removeid) 
  {
         var temparr=list.filter(function(item){
            if(item.id === removeid){
                return false
            }
            else{
                return true
            }
         })
         setList(temparr)
  }

  function handleChange(event) {

setnewitem(event.target.value)

  }

  function addelement() {
  setList([...list,{id:list.length+1,activity:newitem}])
  }
  return (
    <div class="todo-container">
        <div class="todo-header">
      <h1>TODO LIST</h1></div>
      <input class="input-field" value={newitem} onChange={handleChange}></input>
      <button class="add-btn" onClick={addelement}>Add</button>
      <ul class="todo-list">
        {
        list.map(
            (item, index) => (
          <li key={index}>{item.activity} <button class="delete-btn"  onClick={()=>{handleDelete(item.id)}}>Delete</button></li>
        ))
        }
      </ul>
    </div>
  );
}

export default Todo;