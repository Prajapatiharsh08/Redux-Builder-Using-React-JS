import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myDelete, myEdit } from './Action';

export default function Display() {

  const data = useSelector((store) => store.ReduxTodo)
  console.log(data);

  const dispatch = useDispatch()

  function Edit(i, data) {
    dispatch(myEdit(i, data))
  }

  function Delete(i) {
    dispatch(myDelete(i))
  }

  return (
    <div>
      {
        data.map((el, i) => {
          return <li key={i}>
            {el}
            <button onClick={() => Edit(i, prompt('Edit Your Task : ', el))}>Edit</button>
            <button onClick={() => Delete(i)}>Delete</button>
          </li>
        })
      }
    </div>
  )
}
